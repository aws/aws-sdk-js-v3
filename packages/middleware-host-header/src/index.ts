import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  RequestHandler,
  BuildMiddleware,
  Provider,
  Endpoint,
  BuildHandlerOptions,
  AbsoluteLocation,
  Pluggable
} from "@aws-sdk/types";

export interface HostHeaderInputConfig {}
interface PreviouslyResolved {
  requestHandler: RequestHandler<any, any>;
  endpoint: Provider<Endpoint>;
}
export interface HostHeaderResolvedConfig {
  requestHandler: RequestHandler<any, any>;
  endpoint: Provider<Endpoint>;
}
export function resolveHostHeaderConfig<T>(
  input: T & PreviouslyResolved & HostHeaderInputConfig
): T & HostHeaderResolvedConfig {
  return input;
}

export const hostHeaderMiddleware = <
  Input extends object,
  Output extends object
>(
  options: HostHeaderResolvedConfig
): BuildMiddleware<Input, Output> => next => async args => {
  if (!HttpRequest.isInstance(args.request)) return next(args);
  const { request } = args;
  const { metadata = [] } = options.requestHandler;
  //H2 request
  if (metadata.includes("h2") && !request.headers[":authority"]) {
    delete request.headers["host"];
    request.headers[":authority"] = "";
    //non-H2 request and 'host' header is not set
  } else if (!request.headers["host"]) {
    request.headers["host"] = (await options.endpoint()).hostname;
  }
  return next(args);
};

export const hostHeaderMiddlewareOptions: BuildHandlerOptions &
  AbsoluteLocation = {
  name: "hostHeaderMiddleware",
  step: "build",
  tags: ["HOST"]
};

export const getHostHeaderPlugin = (
  options: HostHeaderResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }
});
