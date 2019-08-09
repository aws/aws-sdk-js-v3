import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateThing } from "../model/UpdateThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateThingInput } from "../types/UpdateThingInput";
import { UpdateThingOutput } from "../types/UpdateThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateThingInput";
export * from "../types/UpdateThingOutput";
export * from "../types/UpdateThingExceptionsUnion";

export class UpdateThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateThingInput,
      OutputTypesUnion,
      UpdateThingOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateThingInput,
    UpdateThingOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateThingInput, UpdateThingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateThingInput, UpdateThingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
