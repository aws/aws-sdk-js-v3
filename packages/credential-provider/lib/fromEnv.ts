import {CredentialProvider, Credentials} from "@aws/types";

export const ENV_KEY = 'AWS_ACCESS_KEY_ID';
export const ENV_SECRET = 'AWS_SECRET_ACCESS_KEY';
export const ENV_SESSION = 'AWS_SESSION_TOKEN';

export function fromEnv(): CredentialProvider {
    return () => {
        const accessKeyId: string = process.env[ENV_KEY];
        const secretAccessKey: string = process.env[ENV_SECRET];
        if (accessKeyId && secretAccessKey) {
            return Promise.resolve<Credentials>({
                accessKeyId,
                secretAccessKey,
                sessionToken: process.env[ENV_SESSION],
            });
        }

        return Promise.reject<Credentials>('Unable to find environment variable credentials.');
    };
}
