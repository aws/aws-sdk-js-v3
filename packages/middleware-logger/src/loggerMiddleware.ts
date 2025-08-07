import type {
  AbsoluteLocation,
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  OperationSchema,
  Pluggable,
} from "@smithy/types";
import { getSmithyContext } from "@smithy/util-middleware";

import { schemaLogFilter } from "./schemaLogFilter";

export const loggerMiddleware =
  () =>
  <Output extends MetadataBearer = MetadataBearer>(
    next: InitializeHandler<any, Output>,
    context: HandlerExecutionContext
  ): InitializeHandler<any, Output> =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
    const { operationSchema } = getSmithyContext(context) as {
      operationSchema: OperationSchema;
    };

    try {
      const response = await next(args);

      const { clientName, commandName, logger } = context;

      const inputLogFilter = operationSchema
        ? schemaLogFilter.bind(operationSchema.input)
        : context.inputFilterSensitiveLog;
      const outputLogFilter = operationSchema
        ? schemaLogFilter.bind(operationSchema.output)
        : context.outputFilterSensitiveLog;

      const { $metadata, ...outputWithoutMetadata } = response.output;
      logger?.info?.({
        clientName,
        commandName,
        input: inputLogFilter(args.input),
        output: outputLogFilter(outputWithoutMetadata),
        metadata: $metadata,
      });
      return response;
    } catch (error) {
      const { clientName, commandName, logger } = context;

      const inputLogFilter = operationSchema
        ? schemaLogFilter.bind(operationSchema.input)
        : context.inputFilterSensitiveLog;

      logger?.error?.({
        clientName,
        commandName,
        input: inputLogFilter(args.input),
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLoggerPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  },
});
