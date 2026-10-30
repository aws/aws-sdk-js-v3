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

type LazyLog = <T extends object>(value: T) => T;

export const bindLoggerMiddleware =
  (lazyLog: LazyLog) =>
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
      const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
      const inputFilterSensitiveLog =
        dynamoDbDocumentClientOptions.overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;

      logger?.error?.({
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        error,
        metadata: (error as any).$metadata,
      });
      throw error;
    }
  };

export const loggerMiddlewareOptions: InitializeHandlerOptions & AbsoluteLocation = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true,
};

export const bindGetLoggerPlugin =
  (loggerMiddleware: ReturnType<typeof bindLoggerMiddleware>) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (options: any): Pluggable<any, any> => ({
    applyToStack: (clientStack) => {
      clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
  });
