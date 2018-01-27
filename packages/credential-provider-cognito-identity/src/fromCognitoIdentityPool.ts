import { CognitoProviderParameters } from './CognitoProviderParameters';
import { fromCognitoIdentity } from './fromCognitoIdentity';
import { resolveLogins } from './resolveLogins';
import { ProviderError } from '@aws/property-provider';
import {
    GetIdCommand,
} from '@aws/sdk-cognito-identity-browser/commands/GetIdCommand';
import { CredentialProvider } from '@aws/types';

/**
 * Retrieves or generates a unique identifier using Amazon Cognito's `GetId`
 * operation, then generates temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from `GetId` are cached internally, but results from
 * `GetCredentialsForIdentity` are not.
 */
export function fromCognitoIdentityPool(
    {
        AccountId,
        Client,
        CustomRoleArn,
        IdentityPoolId,
        Logins,
    }: FromCognitoIdentityPoolParameters
): CredentialProvider {
    let provider: CredentialProvider = async () => {
        const {
            IdentityId = throwOnMissingId()
        } = await Client.send(new GetIdCommand({
            AccountId: AccountId,
            IdentityPoolId: IdentityPoolId,
            Logins: Logins
                ? await resolveLogins(Logins)
                : undefined,
        }));

        provider = fromCognitoIdentity({
            Client,
            CustomRoleArn,
            IdentityId,
            Logins,
        });

        return provider();
    }

    return () => provider();
}

export interface FromCognitoIdentityPoolParameters extends
    CognitoProviderParameters
{
    /**
     * A standard AWS account ID (9+ digits).
     */
    AccountId?: string;

    /**
     * The unique identifier for the identity pool from which an identity should
     * be retrieved or generated.
     */
    IdentityPoolId: string;
}

function throwOnMissingId(): never {
    throw new ProviderError(
        'Response from Amazon Cognito contained no identity ID'
    );
}
