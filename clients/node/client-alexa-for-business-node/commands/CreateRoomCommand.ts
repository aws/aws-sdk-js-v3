import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRoom } from "../model/CreateRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRoomInput } from "../types/CreateRoomInput";
import { CreateRoomOutput } from "../types/CreateRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateRoomInput";
export * from "../types/CreateRoomOutput";
export * from "../types/CreateRoomExceptionsUnion";

export class CreateRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRoomInput,
      OutputTypesUnion,
      CreateRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRoomInput,
    CreateRoomOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRoomInput, CreateRoomOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRoomInput, CreateRoomOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
