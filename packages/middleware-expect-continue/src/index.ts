import { HttpHandler, HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable,
  RequestHandler,
} from "@smithy/types";

interface PreviouslyResolved {
  runtime: string;
  requestHandler?: RequestHandler<any, any, any> | HttpHandler<any>;
}

export function addExpectContinueMiddleware(options: PreviouslyResolved): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
    async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
      const { request } = args;
      if (HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
        if (options.requestHandler?.constructor?.name !== "FetchHttpHandler") {
          request.headers = {
            ...request.headers,
            Expect: "100-continue",
          };
        }
      }
      return next({
        ...args,
        request,
      });
    };
}

export const addExpectContinueMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: true,
};

export const getAddExpectContinuePlugin = (options: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
  },
});
