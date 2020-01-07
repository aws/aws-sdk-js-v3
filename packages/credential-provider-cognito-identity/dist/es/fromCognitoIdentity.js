import { __awaiter, __generator } from "tslib";
import { resolveLogins } from "./resolveLogins";
import { ProviderError } from "@aws-sdk/property-provider";
import { GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity";
/**
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
export function fromCognitoIdentity(parameters) {
    var _this = this;
    return function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, AccessKeyId, Expiration, _d, SecretKey, SessionToken, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _f = (_e = parameters.client).send;
                    _g = GetCredentialsForIdentityCommand.bind;
                    _h = {
                        CustomRoleArn: parameters.customRoleArn,
                        IdentityId: parameters.identityId
                    };
                    if (!parameters.logins) return [3 /*break*/, 2];
                    return [4 /*yield*/, resolveLogins(parameters.logins)];
                case 1:
                    _j = _k.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _j = undefined;
                    _k.label = 3;
                case 3: return [4 /*yield*/, _f.apply(_e, [new (_g.apply(GetCredentialsForIdentityCommand, [void 0, (_h.Logins = _j,
                                _h)]))()])];
                case 4:
                    _a = (_k.sent()).Credentials, _b = _a === void 0 ? throwOnMissingCredentials() : _a, _c = _b.AccessKeyId, AccessKeyId = _c === void 0 ? throwOnMissingAccessKeyId() : _c, Expiration = _b.Expiration, _d = _b.SecretKey, SecretKey = _d === void 0 ? throwOnMissingSecretKey() : _d, SessionToken = _b.SessionToken;
                    return [2 /*return*/, {
                            accessKeyId: AccessKeyId,
                            secretAccessKey: SecretKey,
                            sessionToken: SessionToken,
                            expiration: Expiration
                        }];
            }
        });
    }); };
}
function throwOnMissingAccessKeyId() {
    throw new ProviderError("Response from Amazon Cognito contained no access key ID");
}
function throwOnMissingCredentials() {
    throw new ProviderError("Response from Amazon Cognito contained no credentials");
}
function throwOnMissingSecretKey() {
    throw new ProviderError("Response from Amazon Cognito contained no secret key");
}
//# sourceMappingURL=fromCognitoIdentity.js.map