import {
  BuildMiddleware,
  BuildHandlerOptions,
  FinalizeRequestMiddleware,
  FinalizeRequestHandlerOptions,
  RelativeLocation,
} from "@aws-sdk/types";
import { EventStreamResolvedConfig } from "./configuration";
import { HttpRequest } from "@aws-sdk/protocol-http";

export const eventStreamHandlingMiddleware = (
  options: EventStreamResolvedConfig
): FinalizeRequestMiddleware<any, any> => (next, context) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  return options.eventStreamPayloadHandler.handle(next, args, context);
};

export const eventStreamHandlingMiddlewareOptions: FinalizeRequestHandlerOptions & RelativeLocation<any, any> = {
  step: "finalizeRequest",
  tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
  name: "eventStreamHandlingMiddleware",
  relation: "after",
  toMiddleware: "awsAuthMiddleware",
};
