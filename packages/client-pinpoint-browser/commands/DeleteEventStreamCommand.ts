import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEventStream } from "../model/DeleteEventStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEventStreamInput } from "../types/DeleteEventStreamInput";
import { DeleteEventStreamOutput } from "../types/DeleteEventStreamOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteEventStreamInput";
export * from "../types/DeleteEventStreamOutput";
export * from "../types/DeleteEventStreamExceptionsUnion";

export class DeleteEventStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEventStreamInput,
      OutputTypesUnion,
      DeleteEventStreamOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteEventStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEventStreamInput,
    DeleteEventStreamOutput,
    Blob
  >();

  constructor(readonly input: DeleteEventStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteEventStreamInput, DeleteEventStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEventStreamInput, DeleteEventStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
