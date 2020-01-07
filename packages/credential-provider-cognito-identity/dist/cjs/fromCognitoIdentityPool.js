"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromCognitoIdentity_1 = require("./fromCognitoIdentity");
const localStorage_1 = require("./localStorage");
const resolveLogins_1 = require("./resolveLogins");
const property_provider_1 = require("@aws-sdk/property-provider");
const client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
/**
 * Retrieves or generates a unique identifier using Amazon Cognito's `GetId`
 * operation, then generates temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from `GetId` are cached internally, but results from
 * `GetCredentialsForIdentity` are not.
 */
function fromCognitoIdentityPool({ accountId, cache = localStorage_1.localStorage(), client, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0
    ? "ANONYMOUS"
    : undefined }) {
    const cacheKey = userIdentifier
        ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}`
        : undefined;
    let provider = async () => {
        let identityId = cacheKey && (await cache.getItem(cacheKey));
        if (!identityId) {
            const { IdentityId = throwOnMissingId() } = await client.send(new client_cognito_identity_1.GetIdCommand({
                AccountId: accountId,
                IdentityPoolId: identityPoolId,
                Logins: logins ? await resolveLogins_1.resolveLogins(logins) : undefined
            }));
            identityId = IdentityId;
            if (cacheKey) {
                Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => { });
            }
        }
        provider = fromCognitoIdentity_1.fromCognitoIdentity({
            client,
            customRoleArn,
            logins,
            identityId
        });
        return provider();
    };
    return () => provider().catch(async (err) => {
        if (cacheKey) {
            Promise.resolve(cache.removeItem(cacheKey)).catch(() => { });
        }
        throw err;
    });
}
exports.fromCognitoIdentityPool = fromCognitoIdentityPool;
function throwOnMissingId() {
    throw new property_provider_1.ProviderError("Response from Amazon Cognito contained no identity ID");
}
//# sourceMappingURL=fromCognitoIdentityPool.js.map