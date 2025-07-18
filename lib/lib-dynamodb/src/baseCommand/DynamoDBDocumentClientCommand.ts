import { setFeature } from "@aws-sdk/core";
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

import { KeyNodeChildren, marshallInput, unmarshallOutput } from "../commands/utils";
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
  protected abstract readonly inputKeyNodes: KeyNodeChildren;
  protected abstract readonly outputKeyNodes: KeyNodeChildren;
  protected abstract clientCommand: $Command<Input | BaseInput, Output | BaseOutput, ResolvedClientConfiguration>;

  public abstract middlewareStack: MiddlewareStack<Input | BaseInput, Output | BaseOutput>;

  protected addMarshallingMiddleware(configuration: DynamoDBDocumentClientResolvedConfig): void {
    const { marshallOptions = {}, unmarshallOptions = {} } = configuration.translateConfig || {};

    marshallOptions.convertTopLevelContainer = marshallOptions.convertTopLevelContainer ?? true;
    unmarshallOptions.convertWithoutMapWrapper = unmarshallOptions.convertWithoutMapWrapper ?? true;

    this.clientCommand.middlewareStack.addRelativeTo(
      (next: InitializeHandler<Input | BaseInput, Output | BaseOutput>, context: HandlerExecutionContext) =>
        async (
          args: InitializeHandlerArguments<Input | BaseInput>
        ): Promise<InitializeHandlerOutput<Output | BaseOutput>> => {
          setFeature(context, "DDB_MAPPER", "d");
          return next({
            ...args,
            /**
             * We overwrite `args.input` at this middleware, but do not
             * mutate the args object itself, which is initially the Command instance.
             *
             * The reason for this is to prevent mutations to the Command instance's inputs
             * from being carried over if the Command instance is reused in a new
             * request.
             */
            input: marshallInput(args.input, this.inputKeyNodes, marshallOptions),
          });
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
