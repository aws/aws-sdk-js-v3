import {
  AbsoluteLocation,
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

export const loggerMiddleware =
  () =>
  <Output extends MetadataBearer = MetadataBearer>(
    next: InitializeHandler<any, Output>,
    context: HandlerExecutionContext
  ): InitializeHandler<any, Output> =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
    const response = await next(args);
    const {
      clientName,
      commandName,
      logger,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      dynamoDbDocumentClientOptions = {},
    } = context;

    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;

    if (!logger) {
      return response;
    }

    if (typeof logger.info === "function") {
      const { $metadata, ...outputWithoutMetadata } = response.output;

      logger.info({
        clientName,
        commandName,
        input: (overrideInputFilterSensitiveLog ?? inputFilterSensitiveLog)(args.input),
        output: (overrideOutputFilterSensitiveLog ?? outputFilterSensitiveLog)(outputWithoutMetadata),
        metadata: $metadata,
      });
    }

    return response;
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
