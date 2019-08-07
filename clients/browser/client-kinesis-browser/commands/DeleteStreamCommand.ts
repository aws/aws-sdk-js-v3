import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteStream } from "../model/DeleteStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStreamInput } from "../types/DeleteStreamInput";
import { DeleteStreamOutput } from "../types/DeleteStreamOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/DeleteStreamInput";
export * from "../types/DeleteStreamOutput";
export * from "../types/DeleteStreamExceptionsUnion";

export class DeleteStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStreamInput,
      OutputTypesUnion,
      DeleteStreamOutput,
      KinesisResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStreamInput,
    DeleteStreamOutput,
    Blob
  >();

  constructor(readonly input: DeleteStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteStreamInput, DeleteStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStreamInput, DeleteStreamOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
