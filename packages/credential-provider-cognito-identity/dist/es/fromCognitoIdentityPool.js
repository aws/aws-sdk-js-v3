import { __awaiter, __generator } from "tslib";
import { fromCognitoIdentity } from "./fromCognitoIdentity";
import { localStorage } from "./localStorage";
import { resolveLogins } from "./resolveLogins";
import { ProviderError } from "@aws-sdk/property-provider";
import { GetIdCommand } from "@aws-sdk/client-cognito-identity";
/**
 * Retrieves or generates a unique identifier using Amazon Cognito's `GetId`
 * operation, then generates temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from `GetId` are cached internally, but results from
 * `GetCredentialsForIdentity` are not.
 */
export function fromCognitoIdentityPool(_a) {
    var _this = this;
    var accountId = _a.accountId, _b = _a.cache, cache = _b === void 0 ? localStorage() : _b, client = _a.client, customRoleArn = _a.customRoleArn, identityPoolId = _a.identityPoolId, logins = _a.logins, _c = _a.userIdentifier, userIdentifier = _c === void 0 ? !logins || Object.keys(logins).length === 0
        ? "ANONYMOUS"
        : undefined : _c;
    var cacheKey = userIdentifier
        ? "aws:cognito-identity-credentials:" + identityPoolId + ":" + userIdentifier
        : undefined;
    var provider = function () { return __awaiter(_this, void 0, void 0, function () {
        var identityId, _a, _b, IdentityId, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _a = cacheKey;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, cache.getItem(cacheKey)];
                case 1:
                    _a = (_h.sent());
                    _h.label = 2;
                case 2:
                    identityId = _a;
                    if (!!identityId) return [3 /*break*/, 7];
                    _d = (_c = client).send;
                    _e = GetIdCommand.bind;
                    _f = {
                        AccountId: accountId,
                        IdentityPoolId: identityPoolId
                    };
                    if (!logins) return [3 /*break*/, 4];
                    return [4 /*yield*/, resolveLogins(logins)];
                case 3:
                    _g = _h.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _g = undefined;
                    _h.label = 5;
                case 5: return [4 /*yield*/, _d.apply(_c, [new (_e.apply(GetIdCommand, [void 0, (_f.Logins = _g,
                                _f)]))()])];
                case 6:
                    _b = (_h.sent()).IdentityId, IdentityId = _b === void 0 ? throwOnMissingId() : _b;
                    identityId = IdentityId;
                    if (cacheKey) {
                        Promise.resolve(cache.setItem(cacheKey, identityId)).catch(function () { });
                    }
                    _h.label = 7;
                case 7:
                    provider = fromCognitoIdentity({
                        client: client,
                        customRoleArn: customRoleArn,
                        logins: logins,
                        identityId: identityId
                    });
                    return [2 /*return*/, provider()];
            }
        });
    }); };
    return function () {
        return provider().catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (cacheKey) {
                    Promise.resolve(cache.removeItem(cacheKey)).catch(function () { });
                }
                throw err;
            });
        }); });
    };
}
function throwOnMissingId() {
    throw new ProviderError("Response from Amazon Cognito contained no identity ID");
}
//# sourceMappingURL=fromCognitoIdentityPool.js.map