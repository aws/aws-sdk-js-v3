import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
  MiddlewareStack,
} from "@aws-sdk/types";

import { KeyNode, marshallInput, unmarshallOutput } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

/**
 * Base class for Commands in lib-dynamodb used to pass middleware to
 * the underlying DynamoDBClient Commands.
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
  protected abstract clientCommandName: string;

  public abstract middlewareStack: MiddlewareStack<Input | BaseInput, Output | BaseOutput>;

  protected addMarshallingMiddleware(configuration: DynamoDBDocumentClientResolvedConfig): void {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};

    this.clientCommand.middlewareStack.add(
      (next: InitializeHandler<Input | BaseInput, Output | BaseOutput>) =>
        async (
          args: InitializeHandlerArguments<Input | BaseInput>
        ): Promise<InitializeHandlerOutput<Output | BaseOutput>> => {
          args.input = marshallInput(this.input, this.inputKeyNodes, marshallOptions);
          return next(args);
        },
      {
        name: "DocumentMarshall",
        step: "initialize",
        override: true,
      }
    );
    this.clientCommand.middlewareStack.add(
      (next: DeserializeHandler<Input | BaseInput, Output | BaseOutput>) =>
        async (
          args: DeserializeHandlerArguments<Input | BaseInput>
        ): Promise<DeserializeHandlerOutput<Output | BaseOutput>> => {
          const deserialized = await next(args);
          deserialized.output = unmarshallOutput(deserialized.output, this.outputKeyNodes, unmarshallOptions);
          return deserialized;
        },
      {
        name: "DocumentUnmarshall",
        step: "deserialize",
        override: true,
      }
    );
  }
}
