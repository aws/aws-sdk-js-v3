import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeMiddleware,
  RequestHandler,
} from "@smithy/types";
import { v4 } from "uuid";

type WithSession = {
  SessionId?: string;
  [key: string]: any;
};

/**
 * Middleware that inject default sessionId for operations, and inject
 * the parameters from request to the response metadata. This is
 * necessary because the SDK cannot access any parameters other than
 * the result stream. So it copies the parameters from input to the same
 * parameters in the output.
 */
export const injectResponseValuesMiddleware =
  (config: { requestHandler: RequestHandler<any, any> }): InitializeMiddleware<any, any> =>
  (next: InitializeHandler<WithSession, WithSession>) =>
  async (args: InitializeHandlerArguments<WithSession>) => {
    if (args.input.SessionId === undefined && isWebSocket(config)) {
      args.input.SessionId = v4();
    }
    const requestParams = {
      ...args.input,
    };
    const response = await next(args);
    const output = response.output;
    for (const key of Object.keys(output)) {
      if (output[key] === undefined && requestParams[key]) {
        output[key] = requestParams[key];
      }
    }
    return response;
  };

const isWebSocket = (config: { requestHandler: RequestHandler<any, any> }) =>
  config.requestHandler.metadata?.handlerProtocol?.includes("websocket");

export const injectResponseValuesMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  name: "injectResponseValuesMiddleware",
  tags: ["WEBSOCKET", "EVENT_STREAM"],
  override: true,
};
