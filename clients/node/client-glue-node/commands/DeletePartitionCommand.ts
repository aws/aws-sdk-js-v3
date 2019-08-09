import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePartition } from "../model/DeletePartition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePartitionInput } from "../types/DeletePartitionInput";
import { DeletePartitionOutput } from "../types/DeletePartitionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeletePartitionInput";
export * from "../types/DeletePartitionOutput";
export * from "../types/DeletePartitionExceptionsUnion";

export class DeletePartitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePartitionInput,
      OutputTypesUnion,
      DeletePartitionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePartition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePartitionInput,
    DeletePartitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePartitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeletePartitionInput, DeletePartitionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePartitionInput, DeletePartitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
