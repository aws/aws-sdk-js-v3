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

export function acceptHeaderMiddleware(): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let { request } = args;
    if (HttpRequest.isInstance(request)) {
      request.headers = {
        ...request.headers,
        accept: "application/json"
      };
    }
    return next({
      ...args,
      request
    });
  };
}

export const acceptHeaderMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_ACCEPT_HEADER", "ACCEPT_HEADER"],
  name: "acceptHeaderMiddleware"
};

export const getAcceptHeaderPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(acceptHeaderMiddleware(), acceptHeaderMiddlewareOptions);
  }
});
