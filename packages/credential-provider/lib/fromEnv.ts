import {CredentialProvider} from "./CredentialProvider";
import {Credentials} from "./Credentials";

export const ENV_KEY = 'AWS_ACCESS_KEY_ID';
export const ENV_SECRET = 'AWS_SECRET_ACCESS_KEY';
export const ENV_SESSION = 'AWS_SESSION_TOKEN';

export function fromEnv(): CredentialProvider {
    return () => {
        const accessKeyId: string = process.env[ENV_KEY];
        const secretKey: string = process.env[ENV_SECRET];
        if (accessKeyId && secretKey) {
            return Promise.resolve<Credentials>({
                accessKeyId,
                secretKey,
                sessionToken: process.env[ENV_SESSION],
            });
        }

        return Promise.reject<Credentials>('Unable to find environment variable credentials.');
    };
}
