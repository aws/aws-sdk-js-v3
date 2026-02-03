import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeMiddleware,
} from "@smithy/types";

type WithSession = {
  SessionId?: string;
  [key: string]: any;
};

/**
 * Most WebSocket operations contains `SessionId` parameter in both input and
 * output, with the same value. This middleware populates the `SessionId`
 * parameter from request to the response. This is necessary because in
 * WebSocket, the SDK cannot access any parameters other than the response
 * stream. So we fake response parameter.
 */
export const injectSessionIdMiddleware =
  (): InitializeMiddleware<any, any> =>
  (next: InitializeHandler<WithSession, WithSession>) =>
  async (args: InitializeHandlerArguments<WithSession>) => {
    const requestParams = {
      ...args.input,
    };
    const response = await next(args);
    const output = response.output;
    if (requestParams.SessionId && output.SessionId == null) {
      output.SessionId = requestParams.SessionId;
    }
    return response;
  };

export const injectSessionIdMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  name: "injectSessionIdMiddleware",
  tags: ["WEBSOCKET", "EVENT_STREAM"],
  override: true,
};
