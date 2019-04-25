import {CredentialProvider, Credentials} from '@aws-sdk/types';
import {ProviderError} from '@aws-sdk/property-provider';
import {
    loadSharedConfigFiles,
    ParsedIniData,
    SharedConfigFiles,
    SharedConfigInit,
} from '@aws-sdk/shared-ini-file-loader';
import { exec } from 'child_process';

const DEFAULT_PROFILE = 'default';
export const ENV_PROFILE = 'AWS_PROFILE';

export interface FromProcessInit extends SharedConfigInit {
    /**
     * The configuration profile to use.
     */
    profile?: string;

    /**
     * A promise that will be resolved with loaded and parsed credentials files.
     * Used to avoid loading shared config files multiple times.
     */
    loadedConfig?: Promise<SharedConfigFiles>;
}

/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export function fromProcess(init: FromProcessInit = {}): CredentialProvider {
    return () => parseKnownFiles(init).then(profiles => resolveProcessCredentials(
        getMasterProfileName(init),
        profiles,
        init
    ));
}

function getMasterProfileName(init: FromProcessInit): string {
    return init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
}

async function resolveProcessCredentials(
    profileName: string,
    profiles: ParsedIniData,
    options: FromProcessInit
): Promise<Credentials> {
    const profile = profiles[profileName];

    if (profiles[profileName]) {
        const credentialProcess = profile['credential_process'];
        if (credentialProcess !== undefined) {
            return await execPromise(credentialProcess)
                .then((processResult: any) => {
                    let data;
                    try {
                        data = JSON.parse(processResult);
                    } catch {
                        throw Error(`Profile ${profileName} credential_process returned invalid JSON.`)
                    }

                    const {
                        Version: version,
                        AccessKeyId: accessKeyId,
                        SecretAccessKey: secretAccessKey,
                        SessionToken: sessionToken,
                        Expiration: expiration
                    } = data;


                    if (version !== 1) {
                        throw Error(`Profile ${profileName} credential_process did not return Version 1.`)
                    }
                    
                    if (accessKeyId === undefined || secretAccessKey === undefined) {
                        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`)
                    }

                    if (expiration) {
                        const currentTime = new Date();
                        const expireTime = new Date(expiration);
                        if (expireTime < currentTime) {
                            throw Error(`Profile ${profileName} credential_process returned expired credentials.`)
                        }
                        return {
                            accessKeyId,
                            secretAccessKey,
                            sessionToken,
                            expiration: Math.floor(
                                (new Date(expiration)).valueOf() / 1000
                            ),
                        }
                    } else {
                        return {
                            accessKeyId,
                            secretAccessKey,
                            sessionToken
                        }
                    }
                }).catch((error: Error) => {
                    throw new ProviderError(
                        error.message
                    )
                });
        } else {
            throw new ProviderError(
                `Profile ${profileName} did not contain credential_process.`
            );
        }
    } else {
        // If the profile cannot be parsed or does not contain the default or
        // specified profile throw an error. This should be considered a terminal
        // resolution error if a profile has been specified by the user (whether via
        // a parameter, anenvironment variable, or another profile's `source_profile` key).
        throw new ProviderError(
            `Profile ${profileName} could not be found in shared credentials file.`
        );
    }
}

function parseKnownFiles(init: FromProcessInit): Promise<ParsedIniData> {
    const {loadedConfig = loadSharedConfigFiles(init)} = init;

    return loadedConfig.then(parsedFiles => {
        const {configFile, credentialsFile} = parsedFiles;
        return {
            ...configFile,
            ...credentialsFile,
        };
    });
}

function execPromise(command: string) {
    return new Promise(function(resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout.trim());
        });
    });
}