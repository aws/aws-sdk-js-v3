import { setFeature } from "@aws-sdk/core/client";
import { Command as $Command } from "@smithy/core/client";
import type {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
  MiddlewareStack,
} from "@smithy/types";

import type { KeyNodeChildren } from "../commands/utils";
import { encodeInput, decodeOutput } from "../commands/utils";
import type { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

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
  ResolvedClientConfiguration,
> extends $Command<any, any, ResolvedClientConfiguration> {
  protected abstract readonly inputKeyNodes: KeyNodeChildren;
  protected abstract readonly outputKeyNodes: KeyNodeChildren;
  protected abstract clientCommand: $Command<any, any, any>;

  public abstract middlewareStack: MiddlewareStack<any, any>;

  protected addMarshallingMiddleware(configuration: DynamoDBDocumentClientResolvedConfig): void {
    const { encodeOptions = {}, decodeOptions = {} } = configuration.translateConfig || {};

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
            input: encodeInput(args.input, this.inputKeyNodes, encodeOptions),
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
          deserialized.output = decodeOutput(deserialized.output, this.outputKeyNodes, decodeOptions);
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
