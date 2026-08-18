import { describe, expect, test as it } from "vitest";

import { authSchemeParametersProvider, authSchemeProvider } from "./authSchemeProvider";

describe("authSchemeProvider", () => {
  it("resolves every operation to noAuth", () => {
    expect(authSchemeProvider({ operation: "GetCity" })).toEqual([{ schemeId: "smithy.api#noAuth" }]);
    expect(authSchemeProvider({})).toEqual([{ schemeId: "smithy.api#noAuth" }]);
  });

  it("surfaces the operation name from smithy context", async () => {
    const context = { __smithy_context: { operation: "GetCity" } } as any;
    const params = await authSchemeParametersProvider({}, context, {});
    expect(params.operation).toBe("GetCity");
  });
});
