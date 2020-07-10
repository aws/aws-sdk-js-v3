import { bucketEndpointMiddleware, getBucketEndpointPlugin, resolveBucketEndpointConfig } from "./index";

describe("middleware-bucket-endpoint package exports", () => {
  it("bucketEndpointMiddleware", () => {
    expect(typeof bucketEndpointMiddleware).toBe("function");
  });

  it("getBucketEndpointPlugin", () => {
    expect(typeof getBucketEndpointPlugin).toBe("function");
  });

  it("resolveBucketEndpointConfig", () => {
    expect(typeof resolveBucketEndpointConfig).toBe("function");
  });
});
