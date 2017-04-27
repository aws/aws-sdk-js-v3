import {CredentialProvider} from './CredentialProvider';
import {Credentials} from "./Credentials";
import {homedir} from 'os';
import {join, sep} from 'path';
import {readFile} from 'fs';

const DEFAULT_PROFILE = 'default';
export const ENV_PROFILE = 'AWS_PROFILE';
export const ENV_CREDENTIALS_PATH = 'AWS_SHARED_CREDENTIALS_FILE';
export const ENV_CONFIG_PATH = 'AWS_CONFIG_FILE';

export interface AssumeRoleParams {
    RoleArn: string;
    RoleSessionName: string;
    ExternalId?: string;
    SerialNumber?: string;
    TokenCode?: string;
}

export interface FromIniInit {
    profile?: string;
    filepath?: string;
    configFilepath?: string;
    mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
    roleAssumer?: (
        sourceCreds: Credentials,
        params: AssumeRoleParams
    ) => Promise<Credentials>;
}

interface Profile {
    [key: string]: string;
}

interface ParsedIniData {
    [key: string]: Profile;
}

interface StaticCredsProfile {
    aws_access_key_id: string;
    aws_secret_access_key: string;
    aws_session_token?: string;
}

function isStaticCredsProfile(arg: any): arg is StaticCredsProfile {
    return Boolean(arg) && typeof arg === 'object'
        && typeof arg.aws_access_key_id === 'string'
        && typeof arg.aws_secret_access_key === 'string'
        && ['undefined', 'string'].indexOf(typeof arg.aws_session_token) > -1;
}

interface AssumeRoleProfile {
    role_arn: string;
    source_profile: string;
    role_session_name?: string;
    external_id?: string;
    mfa_serial?: string;
}

function isAssumeRoleProfile(arg: any): arg is AssumeRoleProfile {
    return Boolean(arg) && typeof arg === 'object'
        && typeof arg.role_arn === 'string'
        && typeof arg.source_profile === 'string'
        && ['undefined', 'string'].indexOf(typeof arg.role_session_name) > -1
        && ['undefined', 'string'].indexOf(typeof arg.external_id) > -1
        && ['undefined', 'string'].indexOf(typeof arg.mfa_serial) > -1;
}

export function fromIni(init: FromIniInit = {}): CredentialProvider {
    return (): Promise<Credentials> => {
        const {
            filepath = process.env[ENV_CREDENTIALS_PATH]
                || join(getHomeDir(), '.aws', 'credentials'),
            configFilepath = process.env[ENV_CONFIG_PATH]
                || join(getHomeDir(), '.aws', 'config'),
            profile = process.env[ENV_PROFILE] || DEFAULT_PROFILE,
        } = init;

        return slurpFile(filepath)
            .then(parseIni)
            .then(profileData => resolveProfileData(profile, profileData, init))
            .catch(() => {
                return slurpFile(configFilepath)
                    .then(parseIni)
                    .then(profileData => resolveProfileData(
                        profile === DEFAULT_PROFILE ?
                            profile : `profile ${profile}`,
                        profileData,
                        init
                    ));
            });
    };
}

async function resolveProfileData(
    profile: string,
    profiles: ParsedIniData,
    options: FromIniInit
): Promise<Credentials> {
    const data = profiles[profile];
    if (isStaticCredsProfile(data)) {
        return Promise.resolve({
            accessKeyId: data.aws_access_key_id,
            secretKey: data.aws_secret_access_key,
            sessionToken: data.aws_session_token,
        });
    } else if (isAssumeRoleProfile(data)) {
        if (!options.roleAssumer) {
            throw new Error(
                `Profile ${profile} requires a role to be assumed, but no role assumption callback was provided.`
            );
        }

        const sourceCreds = fromIni({
            ...options,
            profile: data.source_profile,
        })();
        const params: AssumeRoleParams = {
            RoleArn: data.role_arn,
            RoleSessionName: data.role_session_name || 'aws-sdk-js-' + Date.now(),
            ExternalId: data.external_id,
        };
        if (data.mfa_serial) {
            if (!options.mfaCodeProvider) {
                throw new Error(
                    `Profile ${profile} requires multi-factor authentication, but no MFA code callback was provided.`
                );
            }
            params.SerialNumber = data.mfa_serial;
            params.TokenCode = await options.mfaCodeProvider(params.SerialNumber);
        }

        return options.roleAssumer(await sourceCreds, params);
    }

    throw new Error(
        `Profile ${profile} could not be found or parsed in shared credentials file.`
    );
}

function parseIni(iniData: string): ParsedIniData {
    const map: ParsedIniData = {};
    let currentSection: string|undefined;
    for (let line of iniData.split(/\r?\n/)) {
        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
        const section = line.match(/^\s*\[([^\[\]]+)]\s*$/);
        if (section) {
            currentSection = section[1];
        } else if (currentSection) {
            const item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
            if (item) {
                map[currentSection] = map[currentSection] || {};
                map[currentSection][item[1]] = item[2];
            }
        }
    }

    return map;
}

function slurpFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function getHomeDir(): string {
    const {
        HOME,
        USERPROFILE,
        HOMEPATH,
        HOMEDRIVE = `C:${sep}`,
    } = process.env;

    if (HOME) return HOME;
    if (USERPROFILE) return USERPROFILE;
    if (HOMEPATH) return `${HOMEDRIVE}${HOMEPATH}`;

    return homedir();
}
