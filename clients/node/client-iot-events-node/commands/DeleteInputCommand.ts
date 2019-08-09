import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteInput } from "../model/DeleteInput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInputInput } from "../types/DeleteInputInput";
import { DeleteInputOutput } from "../types/DeleteInputOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/DeleteInputInput";
export * from "../types/DeleteInputOutput";
export * from "../types/DeleteInputExceptionsUnion";

export class DeleteInputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInputInput,
      OutputTypesUnion,
      DeleteInputOutput,
      IoTEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteInput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInputInput,
    DeleteInputOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteInputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteInputInput, DeleteInputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInputInput, DeleteInputOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
