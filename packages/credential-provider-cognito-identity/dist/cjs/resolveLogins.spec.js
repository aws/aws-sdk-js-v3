"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolveLogins_1 = require("./resolveLogins");
describe("resolveLogins", () => {
    it("should convert provider functions to string tokens", async () => {
        expect(await resolveLogins_1.resolveLogins({
            "www.amazon.com": "string token",
            "cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789": () => Promise.resolve("potential refreshing token")
        })).toEqual({
            "www.amazon.com": "string token",
            "cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789": "potential refreshing token"
        });
    });
});
//# sourceMappingURL=resolveLogins.spec.js.map