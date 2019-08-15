import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateInput } from "../model/operations/UpdateInput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateInputInput } from "../types/UpdateInputInput";
import { UpdateInputOutput } from "../types/UpdateInputOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/UpdateInputInput";
export * from "../types/UpdateInputOutput";
export * from "../types/UpdateInputExceptionsUnion";

export class UpdateInputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateInputInput,
      OutputTypesUnion,
      UpdateInputOutput,
      IoTEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateInput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateInputInput,
    UpdateInputOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateInputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateInputInput, UpdateInputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateInputInput, UpdateInputOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
