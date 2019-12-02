import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function addExpectContinueMiddleware(): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let request = { ...args.request };
    if (HttpRequest.isInstance(request) && request.body) {
      request.headers = {
        ...request.headers,
        Expect: "100-continue"
      };
    }
    return next({
      ...args,
      request
    });
  };
}

export const addExpectContinueMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware"
};

export const getAddExpectContinuePlugin = (): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      addExpectContinueMiddleware(),
      addExpectContinueMiddlewareOptions
    );
  }
});
