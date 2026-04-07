import type {
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

/**
 * This middleware is attached to operations designated as long-polling.
 * @internal
 */
export const longPollMiddleware =
  () =>
  <Output extends MetadataBearer = MetadataBearer>(
    next: InitializeHandler<any, Output>,
    context: HandlerExecutionContext
  ): InitializeHandler<any, Output> =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
    context.__retryLongPoll = true;
    return next(args);
  };

/**
 * @internal
 */
export const longPollMiddlewareOptions: InitializeHandlerOptions = {
  name: "longPollMiddleware",
  tags: ["RETRY"],
  step: "initialize",
  override: true,
};

/**
 * @internal
 */
export const getLongPollPlugin = (options: {}): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(longPollMiddleware(), longPollMiddlewareOptions);
  },
});
