import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TransactGetItems } from "../model/TransactGetItems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TransactGetItemsInput } from "../types/TransactGetItemsInput";
import { TransactGetItemsOutput } from "../types/TransactGetItemsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/TransactGetItemsInput";
export * from "../types/TransactGetItemsOutput";
export * from "../types/TransactGetItemsExceptionsUnion";

export class TransactGetItemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TransactGetItemsInput,
      OutputTypesUnion,
      TransactGetItemsOutput,
      DynamoDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TransactGetItems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TransactGetItemsInput,
    TransactGetItemsOutput,
    Uint8Array
  >();

  constructor(readonly input: TransactGetItemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<TransactGetItemsInput, TransactGetItemsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TransactGetItemsInput, TransactGetItemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
