import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResolveRoom } from "../model/operations/ResolveRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResolveRoomInput } from "../types/ResolveRoomInput";
import { ResolveRoomOutput } from "../types/ResolveRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ResolveRoomInput";
export * from "../types/ResolveRoomOutput";
export * from "../types/ResolveRoomExceptionsUnion";

export class ResolveRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResolveRoomInput,
      OutputTypesUnion,
      ResolveRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResolveRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResolveRoomInput,
    ResolveRoomOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResolveRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<ResolveRoomInput, ResolveRoomOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResolveRoomInput, ResolveRoomOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
