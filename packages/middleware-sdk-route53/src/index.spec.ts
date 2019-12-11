import {
  changeBatchAliasTargetIdNormalizerMiddleware,
  getChangeBatchAliasTargetIdNormalizerPlugin,
  idNormalizerMiddleware,
  getIdNormalizerPlugin
} from "./index";

describe("middleware-sdk-route53 package exports", () => {
  it("changeBatchAliasTargetIdNormalizerMiddleware", () => {
    expect(typeof changeBatchAliasTargetIdNormalizerMiddleware).toBe(
      "function"
    );
  });

  it("getChangeBatchAliasTargetIdNormalizerPlugin", () => {
    expect(typeof getChangeBatchAliasTargetIdNormalizerPlugin).toBe("function");
  });

  it("idNormalizerMiddleware", () => {
    expect(typeof idNormalizerMiddleware).toBe("function");
  });

  it("getIdNormalizerPlugin", () => {
    expect(typeof getIdNormalizerPlugin).toBe("function");
  });
});
