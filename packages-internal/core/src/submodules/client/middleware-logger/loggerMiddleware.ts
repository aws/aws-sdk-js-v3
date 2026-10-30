import type {
  AbsoluteLocation,
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

import { lazyLog } from "./lazyLog";

export const loggerMiddleware =
  () =>
  <Output extends MetadataBearer = MetadataBearer>(
    next: InitializeHandler<any, Output>,
    context: HandlerExecutionContext
  ): InitializeHandler<any, Output> =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
    try {
      const response = await next(args);
      const { clientName, commandName, logger } = context;

      logger?.info?.(
        lazyLog({
          clientName,
          commandName,
          get input() {
            const input = (
              context.dynamoDbDocumentClientOptions?.overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog
            )(args.input);
            Object.defineProperty(this, "input", { enumerable: true, value: input });
            return input;
          },
          get output() {
            const { $metadata, ...output } = response.output;
            const filtered = (
              context.dynamoDbDocumentClientOptions?.overrideOutputFilterSensitiveLog ??
              context.outputFilterSensitiveLog
            )(output);
            Object.defineProperty(this, "output", { enumerable: true, value: filtered });
            return filtered;
          },
          metadata: response.output.$metadata,
        })
      );
      return response;
    } catch (error) {
      const { clientName, commandName, logger } = context;

      logger?.error?.(
        lazyLog({
          clientName,
          commandName,
          get input() {
            const input = (
              context.dynamoDbDocumentClientOptions?.overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog
            )(args.input);
            Object.defineProperty(this, "input", { enumerable: true, value: input });
            return input;
          },
          error,
          metadata: (error as any).$metadata,
        })
      );
      throw error;
    }
  };

export const loggerMiddlewareOptions: InitializeHandlerOptions & AbsoluteLocation = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLoggerPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  },
});
