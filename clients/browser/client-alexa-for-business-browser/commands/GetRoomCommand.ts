import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRoom } from "../model/GetRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRoomInput } from "../types/GetRoomInput";
import { GetRoomOutput } from "../types/GetRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetRoomInput";
export * from "../types/GetRoomOutput";
export * from "../types/GetRoomExceptionsUnion";

export class GetRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRoomInput,
      OutputTypesUnion,
      GetRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = GetRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRoomInput,
    GetRoomOutput,
    Blob
  >();

  constructor(readonly input: GetRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRoomInput, GetRoomOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRoomInput, GetRoomOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
