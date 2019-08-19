import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteThing } from "../model/operations/DeleteThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteThingInput } from "../types/DeleteThingInput";
import { DeleteThingOutput } from "../types/DeleteThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteThingInput";
export * from "../types/DeleteThingOutput";
export * from "../types/DeleteThingExceptionsUnion";

export class DeleteThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteThingInput,
      OutputTypesUnion,
      DeleteThingOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteThingInput,
    DeleteThingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteThingInput, DeleteThingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteThingInput, DeleteThingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
