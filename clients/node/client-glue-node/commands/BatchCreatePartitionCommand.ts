import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchCreatePartition } from "../model/BatchCreatePartition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchCreatePartitionInput } from "../types/BatchCreatePartitionInput";
import { BatchCreatePartitionOutput } from "../types/BatchCreatePartitionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchCreatePartitionInput";
export * from "../types/BatchCreatePartitionOutput";
export * from "../types/BatchCreatePartitionExceptionsUnion";

export class BatchCreatePartitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchCreatePartitionInput,
      OutputTypesUnion,
      BatchCreatePartitionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchCreatePartition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchCreatePartitionInput,
    BatchCreatePartitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchCreatePartitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchCreatePartitionInput,
    BatchCreatePartitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchCreatePartitionInput, BatchCreatePartitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
