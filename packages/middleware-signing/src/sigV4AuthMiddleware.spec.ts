import { awsAuthMiddleware } from "./awsAuthMiddleware";
import { sigV4AuthMiddleware } from "./sigV4AuthMiddleware";

describe(sigV4AuthMiddleware.name, () => {
  it("should be equal to awsAuthMiddleware", async () => {
    expect(sigV4AuthMiddleware).toBe(awsAuthMiddleware);
  });
});
