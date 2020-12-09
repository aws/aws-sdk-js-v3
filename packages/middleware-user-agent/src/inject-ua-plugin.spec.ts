import { constructStack } from "@aws-sdk/middleware-stack";
import { Handler } from "@aws-sdk/types";

import { injectUserAgent } from "./inject-ua-plugin";

describe("injectUserAgent", () => {
  it("should inject user agent to handler execution context", async () => {
    const stack = constructStack();
    const addSpy = jest.spyOn(stack, "add");
    stack.use(
      injectUserAgent({
        name: "foo-api",
        version: "1.0.0",
        userAgentIdentifier: "FooApi",
      })
    );
    stack.add(
      (next, context) => (args) => {
        // @ts-ignore
        args.input.context = context;
        return next(args);
      },
      { step: "build" }
    );
    const mockCoreHandler: Handler<object, object> = jest.fn();
    const handler = stack.resolve(mockCoreHandler, {});
    await handler({ input: {} });
    expect(mockCoreHandler).toHaveBeenCalled();
    expect((mockCoreHandler as jest.Mock).mock.calls[0][0]?.input?.context).toMatchObject({
      userAgent: [["foo-api", "1.0.0"]],
    });
    expect(addSpy.mock.calls[0][1]).toMatchObject({
      name: "injectFooApiUAMiddleware",
      step: "initialize",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
    });
  });
});
