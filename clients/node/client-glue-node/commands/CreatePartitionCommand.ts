import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePartition } from "../model/CreatePartition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePartitionInput } from "../types/CreatePartitionInput";
import { CreatePartitionOutput } from "../types/CreatePartitionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreatePartitionInput";
export * from "../types/CreatePartitionOutput";
export * from "../types/CreatePartitionExceptionsUnion";

export class CreatePartitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePartitionInput,
      OutputTypesUnion,
      CreatePartitionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePartition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePartitionInput,
    CreatePartitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePartitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePartitionInput, CreatePartitionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePartitionInput, CreatePartitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
