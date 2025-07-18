import { setFeature } from "@aws-sdk/core";
import { NumberValueImpl as NumberValue } from "@aws-sdk/util-dynamodb";
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

    this.clientCommand.middlewareStack.add(
      (next: InitializeHandler<Input | BaseInput, Output | BaseOutput>, context: HandlerExecutionContext) =>
        async (
          args: InitializeHandlerArguments<Input | BaseInput>
        ): Promise<InitializeHandlerOutput<Output | BaseOutput>> => {
          return next({
            ...args,
            input: this.getCommandInput(),
          });
        },
      {
        name: "DocumentInitCopyInput",
        step: "initialize",
        priority: "high",
        override: true,
      }
    );
    this.clientCommand.middlewareStack.addRelativeTo(
      (next: InitializeHandler<Input | BaseInput, Output | BaseOutput>, context: HandlerExecutionContext) =>
        async (
          args: InitializeHandlerArguments<Input | BaseInput>
        ): Promise<InitializeHandlerOutput<Output | BaseOutput>> => {
          setFeature(context, "DDB_MAPPER", "d");
          args.input = marshallInput(args.input, this.inputKeyNodes, marshallOptions);
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

  /**
   * For snapshotting the user input as the request starts.
   * The reason for this is to prevent mutations to the Command instance's inputs
   * from being carried over if the Command instance is reused in a new
   * request.
   */
  private getCommandInput(): Input | BaseInput {
    return this.documentClone(this.input);
  }

  /**
   * Recursive clone of types applicable to DynamoDBDocument.
   */
  private documentClone(it: any): any {
    if (it === null || it === undefined) {
      return it;
    }
    if (it instanceof Set) {
      return new Set(it.values());
    }
    if (it instanceof Map) {
      return new Map(it.entries());
    }
    if (typeof it === "object") {
      if (it instanceof NumberValue) {
        return new NumberValue(it.value);
      }
      if (it instanceof Uint8Array) {
        return new Uint8Array(it);
      }
      if (Array.isArray(it)) {
        return it.map((i) => this.documentClone(i));
      }
      const out = {} as any;
      for (const [key, value] of Object.entries(it)) {
        out[key] = this.documentClone(value);
      }
      return out;
    }
    return it;
  }
}
