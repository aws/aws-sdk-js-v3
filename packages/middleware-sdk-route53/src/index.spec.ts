import {
  changeResourceRecordSetsMiddleware,
  getChangeResourceRecordSetsPlugin,
  getIdNormalizerPlugin,
  idNormalizerMiddleware,
} from "./index";

describe("middleware-sdk-route53 package exports", () => {
  it("changeResourceRecordSetsMiddleware", () => {
    expect(typeof changeResourceRecordSetsMiddleware).toBe("function");
  });

  it("getChangeResourceRecordSetsPlugin", () => {
    expect(typeof getChangeResourceRecordSetsPlugin).toBe("function");
  });

  it("idNormalizerMiddleware", () => {
    expect(typeof idNormalizerMiddleware).toBe("function");
  });

  it("getIdNormalizerPlugin", () => {
    expect(typeof getIdNormalizerPlugin).toBe("function");
  });
});
