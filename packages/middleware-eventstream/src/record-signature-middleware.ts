import {
  FinalizeRequestMiddleware,
  FinalizeRequestHandlerOptions,
  RelativeLocation
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
export const recordSignatureMiddleware: FinalizeRequestMiddleware<any, any> = (
  next,
  context
) => async args => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  const match = (request.headers["authorization"] || "").match(
    /Signature=([\w]+)$/
  );
  context.signature = (match || [])[1];
  return next(args);
};

export const recordSignatureMiddlewareOptions: FinalizeRequestHandlerOptions &
  RelativeLocation<any, any> = {
  step: "finalizeRequest",
  tags: ["EVENT_STREAM", "SIGNATURE", "RECORD"],
  name: "recordSignatureMiddleware",
  relation: "after",
  toMiddleware: "awsAuthMiddleware"
};
