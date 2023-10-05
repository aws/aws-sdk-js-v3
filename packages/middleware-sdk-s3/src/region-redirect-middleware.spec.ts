import { HandlerExecutionContext } from "@smithy/types";

import { regionRedirectMiddleware } from "./region-redirect-middleware";

describe(regionRedirectMiddleware.name, () => {
  const region = async () => "us-east-1";
  const redirectRegion = "us-west-2";
  let call = 0;
  const next = (arg: any) => {
    if (call === 0) {
      call++;
      throw Object.assign(new Error(), {
        name: "PermanentRedirect",
        $metadata: { httpStatusCode: 301 },
        $response: { headers: { "x-amz-bucket-region": redirectRegion } },
      });
    }
    return null as any;
  };

  beforeEach(() => {
    call = 0;
  });

  it("set S3 region redirect on context if receiving a PermanentRedirect error code with status 301", async () => {
    const middleware = regionRedirectMiddleware({ region, followRegionRedirects: true });
    const context = {} as HandlerExecutionContext;
    const handler = middleware(next, context);
    await handler({ input: null });
    expect(context.__s3RegionRedirect).toEqual(redirectRegion);
  });

  it("does not follow the redirect when followRegionRedirects is false", async () => {
    const middleware = regionRedirectMiddleware({ region, followRegionRedirects: false });
    const context = {} as HandlerExecutionContext;
    const handler = middleware(next, context);
    // Simulating a PermanentRedirect error with status 301
    await expect(async () => {
      await handler({ input: null });
    }).rejects.toThrowError(
      Object.assign(new Error(), {
        Code: "PermanentRedirect",
        $metadata: { httpStatusCode: 301 },
        $response: { headers: { "x-amz-bucket-region": redirectRegion } },
      })
    );
    // Ensure that context.__s3RegionRedirect is not set
    expect(context.__s3RegionRedirect).toBeUndefined();
  });
});
