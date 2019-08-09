import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetChannels } from "../model/GetChannels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetChannelsInput } from "../types/GetChannelsInput";
import { GetChannelsOutput } from "../types/GetChannelsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetChannelsInput";
export * from "../types/GetChannelsOutput";
export * from "../types/GetChannelsExceptionsUnion";

export class GetChannelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetChannelsInput,
      OutputTypesUnion,
      GetChannelsOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetChannels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetChannelsInput,
    GetChannelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetChannelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetChannelsInput, GetChannelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetChannelsInput, GetChannelsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
