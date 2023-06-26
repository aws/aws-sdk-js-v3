import { Command as $Command } from "@smithy/smithy-client";
import {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
  MiddlewareStack,
} from "@smithy/types";

import { KeyNode, marshallInput, unmarshallOutput } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

// /** @public */
// export { $Command, DynamoDBDocumentClientResolvedConfig };

/**
 * Base class for Commands in lib-dynamodb used to pass middleware to
 * the underlying DynamoDBClient Commands.
 *
 * @public
 */
export abstract class DynamoDBDocumentClientCommand<
  Input extends object,
  Output extends object,
  BaseInput extends object,
  BaseOutput extends object,
  ResolvedClientConfiguration
> extends $Command<Input | BaseInput, Output | BaseOutput, ResolvedClientConfiguration> {
  protected abstract readonly inputKeyNodes: KeyNode[];
  protected abstract readonly outputKeyNodes: KeyNode[];
  protected abstract clientCommand: $Command<Input | BaseInput, Output | BaseOutput, ResolvedClientConfiguration>;

  public abstract middlewareStack: MiddlewareStack<Input | BaseInput, Output | BaseOutput>;

  private static defaultLogFilterOverrides = {
    overrideInputFilterSensitiveLog(...args: any[]) {},
    overrideOutputFilterSensitiveLog(...args: any[]) {},
  };

  protected addMarshallingMiddleware(configuration: DynamoDBDocumentClientResolvedConfig): void {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};

    this.clientCommand.middlewareStack.addRelativeTo(
      (next: InitializeHandler<Input | BaseInput, Output | BaseOutput>, context: HandlerExecutionContext) =>
        async (
          args: InitializeHandlerArguments<Input | BaseInput>
        ): Promise<InitializeHandlerOutput<Output | BaseOutput>> => {
          args.input = marshallInput(this.input, this.inputKeyNodes, marshallOptions);
          context.dynamoDbDocumentClientOptions =
            context.dynamoDbDocumentClientOptions || DynamoDBDocumentClientCommand.defaultLogFilterOverrides;

          const input = args.input;
          context.dynamoDbDocumentClientOptions.overrideInputFilterSensitiveLog = () => {
            return context.inputFilterSensitiveLog?.(input);
          };
          return next(args);
        },
      {
        name: "DocumentMarshall",
        relation: "before",
        toMiddleware: "serializerMiddleware",
        override: true,
      }
    );
    this.clientCommand.middlewareStack.addRelativeTo(
      (next: DeserializeHandler<Input | BaseInput, Output | BaseOutput>, context: HandlerExecutionContext) =>
        async (
          args: DeserializeHandlerArguments<Input | BaseInput>
        ): Promise<DeserializeHandlerOutput<Output | BaseOutput>> => {
          const deserialized = await next(args);

          /**
           * The original filter function is based on the shape of the
           * base DynamoDB type, whereas the returned output will be
           * unmarshalled. Therefore the filter log needs to be modified
           * to act on the original output structure.
           */
          const output = deserialized.output;
          context.dynamoDbDocumentClientOptions =
            context.dynamoDbDocumentClientOptions || DynamoDBDocumentClientCommand.defaultLogFilterOverrides;

          context.dynamoDbDocumentClientOptions.overrideOutputFilterSensitiveLog = () => {
            return context.outputFilterSensitiveLog?.(output);
          };

          deserialized.output = unmarshallOutput(deserialized.output, this.outputKeyNodes, unmarshallOptions);
          return deserialized;
        },
      {
        name: "DocumentUnmarshall",
        relation: "before",
        toMiddleware: "deserializerMiddleware",
        override: true,
      }
    );
  }
}
