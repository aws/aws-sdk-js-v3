import { HttpRequest } from "@smithy/protocol-http";

import { redirectFromPostIdMiddleware } from "./redirect-from-postid";

describe("redirectFromPostIdMiddleware", () => {
  it("should redirect request if Bucket is a valid ARN", async () => {
    const next: any = (args: any) => ({ output: args.request });
    const context: any = {};
    const { output } = await redirectFromPostIdMiddleware({
      isCustomEndpoint: false,
      useFipsEndpoint: () => Promise.resolve(false),
    })(
      next,
      context
    )({
      input: { OutpostId: "op-123" },
      request: new HttpRequest({ hostname: "123456789012.s3-control.us-west-2.amazonaws.com" }),
    });
    expect(output.hostname).toBe("s3-outposts.us-west-2.amazonaws.com");
    expect(context["signing_service"]).toBe("s3-outposts");
  });
});
