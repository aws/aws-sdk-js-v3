import {CredentialProvider, Credentials} from '@aws/types';
import {homedir} from 'os';
import {join, sep} from 'path';
import {readFile} from 'fs';
import {CredentialError} from '@aws/credential-provider-base';

const DEFAULT_PROFILE = 'default';
export const ENV_PROFILE = 'AWS_PROFILE';
export const ENV_CREDENTIALS_PATH = 'AWS_SHARED_CREDENTIALS_FILE';
export const ENV_CONFIG_PATH = 'AWS_CONFIG_FILE';

/**
 * @see http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/STS.html#assumeRole-property
 * TODO update the above to link to V3 docs
 */
export interface AssumeRoleParams {
    /**
     * @copyDoc
     */
    RoleArn: string;

    /**
     * A name for the assumed role session.
     */
    RoleSessionName: string;

    /**
     * A unique identifier that is used by third parties when assuming roles in
     * their customers' accounts.
     */
    ExternalId?: string;

    /**
     * The identification number of the MFA device that is associated with the
     * user who is making the `AssumeRole` call.
     */
    SerialNumber?: string;

    /**
     * The value provided by the MFA device.
     */
    TokenCode?: string;
}

export interface FromIniInit {
    /**
     * The configuration profile to use.
     */
    profile?: string;

    /**
     * The path at which to locate the ini credentials file. Defaults to the
     * value of the `AWS_SHARED_CREDENTIALS_FILE` environment variable (if
     * defined) or `~/.aws/credentials` otherwise.
     */
    filepath?: string;

    /**
     * The path at which to locate the ini config file. Defaults to the value of
     * the `AWS_CONFIG_FILE` environment variable (if defined) or
     * `~/.aws/config` otherwise.
     */
    configFilepath?: string;

    /**
     * A function that returna a promise fulfilled with an MFA token code for
     * the provided MFA Serial code. If a profile requires an MFA code and
     * `mfaCodeProvider` is not a valid function, the credential provider
     * promise will be rejected.
     *
     * @param mfaSerial The serial code of the MFA device specified.
     */
    mfaCodeProvider?: (mfaSerial: string) => Promise<string>;

    /**
     * A function that assumes a role and returns a promise fulfilled with
     * credentials for the assumed role.
     *
     * @param sourceCreds The credentials with which to assume a role.
     * @param params
     */
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

interface StaticCredsProfile extends Profile{
    aws_access_key_id: string;
    aws_secret_access_key: string;
}

function isStaticCredsProfile(arg: any): arg is StaticCredsProfile {
    return Boolean(arg) && typeof arg === 'object'
        && typeof arg.aws_access_key_id === 'string'
        && typeof arg.aws_secret_access_key === 'string'
        && ['undefined', 'string'].indexOf(typeof arg.aws_session_token) > -1;
}

interface AssumeRoleProfile extends Profile{
    role_arn: string;
    source_profile: string;
}

function isAssumeRoleProfile(arg: any): arg is AssumeRoleProfile {
    return Boolean(arg) && typeof arg === 'object'
        && typeof arg.role_arn === 'string'
        && typeof arg.source_profile === 'string'
        && ['undefined', 'string'].indexOf(typeof arg.role_session_name) > -1
        && ['undefined', 'string'].indexOf(typeof arg.external_id) > -1
        && ['undefined', 'string'].indexOf(typeof arg.mfa_serial) > -1;
}

/**
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
export function fromIni(init: FromIniInit = {}): CredentialProvider {
    return () => parseKnownFiles(init).then(profiles => resolveProfileData(
        getMasterProfileName(init),
        profiles,
        init
    ));
}

function getMasterProfileName(init: FromIniInit): string {
    return init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
}

async function resolveProfileData(
    profileName: string,
    profiles: ParsedIniData,
    options: FromIniInit,
    visitedProfiles: {[profileName: string]: true} = {}
): Promise<Credentials> {
    const data = profiles[profileName];
    if (isAssumeRoleProfile(data)) {
        const {
            external_id: ExternalId,
            mfa_serial,
            role_arn: RoleArn,
            role_session_name: RoleSessionName = 'aws-sdk-js-' + Date.now(),
            source_profile
        } = data;

        if (!options.roleAssumer) {
            throw new CredentialError(
                `Profile ${profileName} requires a role to be assumed, but no` +
                ` role assumption callback was provided.`,
                false
            );
        }

        if (source_profile in visitedProfiles) {
            throw new CredentialError(
                `Detected a cycle attempting to resolve credentials for profile`
                + ` ${getMasterProfileName(options)}. Profiles visited: `
                + Object.keys(visitedProfiles).join(', '),
                false
            );
        }

        const sourceCreds = resolveProfileData(
            source_profile,
            profiles,
            options,
            {...visitedProfiles, [source_profile]: true}
        );
        const params: AssumeRoleParams = {RoleArn, RoleSessionName, ExternalId};
        if (mfa_serial) {
            if (!options.mfaCodeProvider) {
                throw new CredentialError(
                    `Profile ${profileName} requires multi-factor authentication,` +
                    ` but no MFA code callback was provided.`,
                    false
                );
            }
            params.SerialNumber = mfa_serial;
            params.TokenCode = await options.mfaCodeProvider(mfa_serial);
        }

        return options.roleAssumer(await sourceCreds, params);
    } else if (isStaticCredsProfile(data)) {
        return Promise.resolve({
            accessKeyId: data.aws_access_key_id,
            secretAccessKey: data.aws_secret_access_key,
            sessionToken: data.aws_session_token,
        });
    }

    throw new CredentialError(
        `Profile ${profileName} could not be found or parsed in shared` +
        ` credentials file.`,
        profileName === DEFAULT_PROFILE
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

function parseKnownFiles(init: FromIniInit): Promise<ParsedIniData> {
    const {
        filepath = process.env[ENV_CREDENTIALS_PATH]
            || join(getHomeDir(), '.aws', 'credentials'),
        configFilepath = process.env[ENV_CONFIG_PATH]
            || join(getHomeDir(), '.aws', 'config'),
    } = init;
    return Promise.all([
        slurpFile(configFilepath).then(parseIni).catch(() => { return {}; }),
        slurpFile(filepath).then(parseIni).catch(() => { return {}; }),
    ]).then((parsedFiles: Array<ParsedIniData>) => {
        const [config = {}, credentials = {}] = parsedFiles;
        const profiles: ParsedIniData = {};

        for (let profile of Object.keys(config)) {
            profiles[profile.replace(/^profile\s/, '')] = config[profile];
        }

        for (let profile of Object.keys(credentials)) {
            profiles[profile] = credentials[profile];
        }

        return profiles;
    });
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
