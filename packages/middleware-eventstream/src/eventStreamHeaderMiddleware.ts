import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildHandlerOptions, BuildMiddleware } from "@aws-sdk/types";
export const eventStreamHeaderMiddleware: BuildMiddleware<any, any> = (next) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  request.headers = {
    ...request.headers,
    "Content-Type": "application/vnd.amazon.eventstream",
    "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
  };
  return next({
    ...args,
    request,
  });
};

export const eventStreamHeaderMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
  name: "eventStreamHeaderMiddleware",
  override: true,
};
