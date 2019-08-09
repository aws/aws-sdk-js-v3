import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRoom } from "../model/DeleteRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRoomInput } from "../types/DeleteRoomInput";
import { DeleteRoomOutput } from "../types/DeleteRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteRoomInput";
export * from "../types/DeleteRoomOutput";
export * from "../types/DeleteRoomExceptionsUnion";

export class DeleteRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRoomInput,
      OutputTypesUnion,
      DeleteRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRoomInput,
    DeleteRoomOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRoomInput, DeleteRoomOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRoomInput, DeleteRoomOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
