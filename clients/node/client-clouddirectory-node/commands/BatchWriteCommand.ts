import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchWrite } from "../model/operations/BatchWrite";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchWriteInput } from "../types/BatchWriteInput";
import { BatchWriteOutput } from "../types/BatchWriteOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/BatchWriteInput";
export * from "../types/BatchWriteOutput";
export * from "../types/BatchWriteExceptionsUnion";

export class BatchWriteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchWriteInput,
      OutputTypesUnion,
      BatchWriteOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchWrite;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchWriteInput,
    BatchWriteOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchWriteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchWriteInput, BatchWriteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchWriteInput, BatchWriteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
