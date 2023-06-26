import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

export function acceptHeaderMiddleware(): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
    async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
      const { request } = args;
      if (HttpRequest.isInstance(request)) {
        request.headers = {
          ...request.headers,
          accept: "application/json",
        };
      }
      return next({
        ...args,
        request,
      });
    };
}

export const acceptHeaderMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_ACCEPT_HEADER", "ACCEPT_HEADER"],
  name: "acceptHeaderMiddleware",
  override: true,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getAcceptHeaderPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(acceptHeaderMiddleware(), acceptHeaderMiddlewareOptions);
  },
});
