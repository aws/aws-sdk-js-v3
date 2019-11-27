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

export function acceptsHeaderMiddleware(): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let request = { ...args.request };
    if (HttpRequest.isInstance(request)) {
      request.headers = {
        ...request.headers,
        accepts: "application/json"
      };
    }
    return next({
      ...args,
      request
    });
  };
}

export const acceptsHeaderMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_ACCEPTS_HEADER", "ACCEPTS_HEADER"],
  name: "acceptsHeaderMiddleware"
};

export const getAcceptsHeaderPlugin = (): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(acceptsHeaderMiddleware(), acceptsHeaderMiddlewareOptions);
  }
});
