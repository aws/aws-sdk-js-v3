import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetItem } from "../model/BatchGetItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetItemInput } from "../types/BatchGetItemInput";
import { BatchGetItemOutput } from "../types/BatchGetItemOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/BatchGetItemInput";
export * from "../types/BatchGetItemOutput";
export * from "../types/BatchGetItemExceptionsUnion";

export class BatchGetItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetItemInput,
      OutputTypesUnion,
      BatchGetItemOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetItem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetItemInput,
    BatchGetItemOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetItemInput, BatchGetItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetItemInput, BatchGetItemOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
