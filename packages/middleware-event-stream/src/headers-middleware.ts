import { BuildMiddleware, BuildHandlerOptions } from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
export const eventStreamHeaderMiddleware: BuildMiddleware<
  any,
  any
> = next => async args => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  request.headers = {
    "content-type": "application/vnd.amazon.eventstream",
    "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
    ...request.headers
  };
  return next({
    ...args,
    request
  });
};

export const eventStreamHeaderMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
  name: "eventStreamHeaderMiddleware"
};
