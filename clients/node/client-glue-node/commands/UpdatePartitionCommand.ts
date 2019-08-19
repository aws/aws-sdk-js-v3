import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePartition } from "../model/operations/UpdatePartition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePartitionInput } from "../types/UpdatePartitionInput";
import { UpdatePartitionOutput } from "../types/UpdatePartitionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdatePartitionInput";
export * from "../types/UpdatePartitionOutput";
export * from "../types/UpdatePartitionExceptionsUnion";

export class UpdatePartitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePartitionInput,
      OutputTypesUnion,
      UpdatePartitionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePartition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePartitionInput,
    UpdatePartitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePartitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdatePartitionInput, UpdatePartitionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePartitionInput, UpdatePartitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
