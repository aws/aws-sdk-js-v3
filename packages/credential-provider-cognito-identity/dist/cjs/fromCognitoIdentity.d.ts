import { CognitoProviderParameters } from "./CognitoProviderParameters";
import { CredentialProvider } from "@aws-sdk/types";
/**
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
export declare function fromCognitoIdentity(parameters: FromCognitoIdentityParameters): CredentialProvider;
export interface FromCognitoIdentityParameters extends CognitoProviderParameters {
    /**
     * The unique identifier for the identity against which credentials will be
     * issued.
     */
    identityId: string;
}
