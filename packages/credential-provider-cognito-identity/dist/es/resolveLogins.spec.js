import { __awaiter, __generator } from "tslib";
import { resolveLogins } from "./resolveLogins";
describe("resolveLogins", function () {
    it("should convert provider functions to string tokens", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, resolveLogins({
                            "www.amazon.com": "string token",
                            "cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789": function () {
                                return Promise.resolve("potential refreshing token");
                            }
                        })];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual({
                        "www.amazon.com": "string token",
                        "cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789": "potential refreshing token"
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=resolveLogins.spec.js.map