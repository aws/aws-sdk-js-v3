import { CognitoProviderParameters } from './CognitoProviderParameters';
import { resolveLogins } from './resolveLogins';
import { ProviderError } from '@aws/property-provider';
import { epoch } from '@aws/protocol-timestamp';
import {
    GetCredentialsForIdentityCommand,
} from '@aws/sdk-cognito-identity-browser/commands/GetCredentialsForIdentityCommand';
import { Credentials, CredentialProvider } from '@aws/types';

/**
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
export function fromCognitoIdentity(
    parameters: FromCognitoIdentityParameters
): CredentialProvider {
    return async (): Promise<Credentials> => {
        const {
            Credentials: {
                AccessKeyId = throwOnMissingAccessKeyId(),
                Expiration,
                SecretKey = throwOnMissingSecretKey(),
                SessionToken,
            } = throwOnMissingCredentials()
        } = await parameters.client.send(new GetCredentialsForIdentityCommand({
            CustomRoleArn: parameters.customRoleArn,
            IdentityId: parameters.identityId,
            Logins: parameters.logins
                ? await resolveLogins(parameters.logins)
                : undefined,
        }));

        return {
            accessKeyId: AccessKeyId,
            secretAccessKey: SecretKey,
            sessionToken: SessionToken,
            expiration: Expiration ? epoch(Expiration) : undefined,
        }
    }
}

export interface FromCognitoIdentityParameters extends
    CognitoProviderParameters
{
    /**
     * The unique identifier for the identity against which credentials will be
     * issued.
     */
    identityId: string;
}

function throwOnMissingAccessKeyId(): never {
    throw new ProviderError(
        'Response from Amazon Cognito contained no access key ID'
    );
}

function throwOnMissingCredentials(): never {
    throw new ProviderError(
        'Response from Amazon Cognito contained no credentials'
    );
}

function throwOnMissingSecretKey(): never {
    throw new ProviderError(
        'Response from Amazon Cognito contained no secret key'
    );
}
