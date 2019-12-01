import {
  FinalizeRequestMiddleware,
  FinalizeRequestHandlerOptions,
  RelativeLocation
} from "@aws-sdk/types";
import { EventStreamResolvedConfig } from "./configuration";
import { HttpRequest } from "@aws-sdk/protocol-http";

export const eventStreamSigningMiddleware = (
  options: EventStreamResolvedConfig
): FinalizeRequestMiddleware<any, any> => next => async args => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  return next({
    ...args,
    request: await options.eventStreamSigner.sign(request)
  });
};

export const eventStreamSigningMiddlewareOptions: FinalizeRequestHandlerOptions &
  RelativeLocation<any, any> = {
  step: "finalizeRequest",
  tags: ["EVENT_STREAM", "SIGNATURE"],
  name: "eventStreamSigningMiddleware",
  relation: "after",
  toMiddleware: "awsAuthMiddleware"
};
