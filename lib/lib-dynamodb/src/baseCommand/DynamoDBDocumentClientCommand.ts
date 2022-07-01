import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
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
  ResolvedClientConfiguration
> extends $Command<Input, Output, ResolvedClientConfiguration> {
  protected abstract readonly inputKeyNodes: KeyNode[];
  protected abstract readonly outputKeyNodes: KeyNode[];

  protected addMarshallingMiddleware<CommandType extends $Command<Input, Output, ResolvedClientConfiguration>>(
    innerClientCommand: CommandType,
    innerClientCommandName: string,
    configuration: DynamoDBDocumentClientResolvedConfig
  ): void {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};

    innerClientCommand.middlewareStack.add(
      (next: InitializeHandler<Input, Output>) =>
        async (args: InitializeHandlerArguments<Input>): Promise<InitializeHandlerOutput<Output>> => {
          args.input = marshallInput(this.input, this.inputKeyNodes, marshallOptions);
          return next(args);
        },
      {
        name: innerClientCommandName + "Marshall",
        step: "initialize",
      }
    );
    innerClientCommand.middlewareStack.add(
      (next: DeserializeHandler<Input, Output>) =>
        async (args: DeserializeHandlerArguments<Input>): Promise<DeserializeHandlerOutput<Output>> => {
          const deserialized = await next(args);
          deserialized.output = unmarshallOutput(deserialized.output, this.outputKeyNodes, unmarshallOptions);
          return deserialized;
        },
      {
        name: innerClientCommandName + "Unmarshall",
        step: "deserialize",
      }
    );
  }
}
