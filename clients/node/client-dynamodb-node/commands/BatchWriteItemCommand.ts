import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchWriteItem } from "../model/operations/BatchWriteItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchWriteItemInput } from "../types/BatchWriteItemInput";
import { BatchWriteItemOutput } from "../types/BatchWriteItemOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/BatchWriteItemInput";
export * from "../types/BatchWriteItemOutput";
export * from "../types/BatchWriteItemExceptionsUnion";

export class BatchWriteItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchWriteItemInput,
      OutputTypesUnion,
      BatchWriteItemOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchWriteItem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchWriteItemInput,
    BatchWriteItemOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchWriteItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchWriteItemInput, BatchWriteItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchWriteItemInput, BatchWriteItemOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
