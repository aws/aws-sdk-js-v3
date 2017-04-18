import {CredentialProvider} from './CredentialProvider';
import {readFile} from 'fs';
import {homedir} from 'os';
import {join} from 'path';

const DEFAULT_PROFILE = 'default';
export const ENV_PROFILE = 'AWS_PROFILE';
const DEFAULT_CREDENTIALS_PATH = join(homedir(), '.aws', 'credentials');
export const ENV_CREDENTIALS_PATH = 'AWS_SHARED_CREDENTIALS_FILE';
const DEFAULT_CONFIG_PATH = join(homedir(), '.aws', 'config');
export const ENV_CONFIG_PATH = 'AWS_CONFIG_FILE';

const INI_KEY = 'aws_access_key_id';
const INI_SECRET = 'aws_secret_access_key';
const INI_SESSION = 'aws_session_token';

export interface fromIniInit {
    profile?: string;
    filepath?: string;
    configFilepath?: string;
}

interface ParsedIniData {
    [key: string]: {[key: string]: string};
}

export function fromIni(init: fromIniInit = {}): CredentialProvider {
    return () => parseKnownFiles(init).then(profiles => {
        const {profile = process.env[ENV_PROFILE] || DEFAULT_PROFILE} = init;
        const profileData = profiles[profile];
        if (undefined === profileData) {
            throw new Error(
                `Profile ${profile} not found in shared credentials file.`
            );
        } else if (!profileData[INI_KEY] || !profileData[INI_SECRET]) {
            throw new Error(
                `Missing key or secret from profile "${profile}" in shared credentials file.`
            );
        }

        return {
            accessKeyId: profileData[INI_KEY],
            secretKey: profileData[INI_SECRET],
            sessionToken: profileData[INI_SESSION],
        };
    });
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

function parseKnownFiles(init: fromIniInit): Promise<ParsedIniData> {
    const {
        filepath = process.env[ENV_CREDENTIALS_PATH] || DEFAULT_CREDENTIALS_PATH,
        configFilepath = process.env[ENV_CONFIG_PATH] || DEFAULT_CONFIG_PATH,
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
