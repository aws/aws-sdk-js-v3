import {CredentialProvider} from '@aws/types';
import {CredentialError} from '@aws/credential-provider-base';
import {epoch} from '@aws/protocol-timestamp';

export const ENV_KEY = 'AWS_ACCESS_KEY_ID';
export const ENV_SECRET = 'AWS_SECRET_ACCESS_KEY';
export const ENV_SESSION = 'AWS_SESSION_TOKEN';
export const ENV_EXPIRATION = 'AWS_CREDENTIAL_EXPIRATION';

/**
 * Source AWS credentials from known environment variables. If either the
 * `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not
 * set in this process, the provider will return a rejected promise.
 */
export function fromEnv(): CredentialProvider {
    return () => {
        const accessKeyId: string = process.env[ENV_KEY];
        const secretAccessKey: string = process.env[ENV_SECRET];
        const expiry: string|undefined = process.env[ENV_EXPIRATION];
        if (accessKeyId && secretAccessKey) {
            return Promise.resolve({
                accessKeyId,
                secretAccessKey,
                sessionToken: process.env[ENV_SESSION],
                expiration: expiry ? epoch(expiry) : undefined
            });
        }

        return Promise.reject(new CredentialError(
            'Unable to find environment variable credentials.'
        ));
    };
}
