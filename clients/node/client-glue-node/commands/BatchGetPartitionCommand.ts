import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetPartition } from "../model/operations/BatchGetPartition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetPartitionInput } from "../types/BatchGetPartitionInput";
import { BatchGetPartitionOutput } from "../types/BatchGetPartitionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchGetPartitionInput";
export * from "../types/BatchGetPartitionOutput";
export * from "../types/BatchGetPartitionExceptionsUnion";

export class BatchGetPartitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetPartitionInput,
      OutputTypesUnion,
      BatchGetPartitionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetPartition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetPartitionInput,
    BatchGetPartitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetPartitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetPartitionInput, BatchGetPartitionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetPartitionInput, BatchGetPartitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
