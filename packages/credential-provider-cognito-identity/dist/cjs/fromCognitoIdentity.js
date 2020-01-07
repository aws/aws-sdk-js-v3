"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolveLogins_1 = require("./resolveLogins");
const property_provider_1 = require("@aws-sdk/property-provider");
const client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
/**
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
function fromCognitoIdentity(parameters) {
    return async () => {
        const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(), Expiration, SecretKey = throwOnMissingSecretKey(), SessionToken } = throwOnMissingCredentials() } = await parameters.client.send(new client_cognito_identity_1.GetCredentialsForIdentityCommand({
            CustomRoleArn: parameters.customRoleArn,
            IdentityId: parameters.identityId,
            Logins: parameters.logins
                ? await resolveLogins_1.resolveLogins(parameters.logins)
                : undefined
        }));
        return {
            accessKeyId: AccessKeyId,
            secretAccessKey: SecretKey,
            sessionToken: SessionToken,
            expiration: Expiration
        };
    };
}
exports.fromCognitoIdentity = fromCognitoIdentity;
function throwOnMissingAccessKeyId() {
    throw new property_provider_1.ProviderError("Response from Amazon Cognito contained no access key ID");
}
function throwOnMissingCredentials() {
    throw new property_provider_1.ProviderError("Response from Amazon Cognito contained no credentials");
}
function throwOnMissingSecretKey() {
    throw new property_provider_1.ProviderError("Response from Amazon Cognito contained no secret key");
}
//# sourceMappingURL=fromCognitoIdentity.js.map