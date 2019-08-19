import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateEmailChannel } from "../model/operations/UpdateEmailChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEmailChannelInput } from "../types/UpdateEmailChannelInput";
import { UpdateEmailChannelOutput } from "../types/UpdateEmailChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateEmailChannelInput";
export * from "../types/UpdateEmailChannelOutput";
export * from "../types/UpdateEmailChannelExceptionsUnion";

export class UpdateEmailChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEmailChannelInput,
      OutputTypesUnion,
      UpdateEmailChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateEmailChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEmailChannelInput,
    UpdateEmailChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateEmailChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEmailChannelInput,
    UpdateEmailChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateEmailChannelInput, UpdateEmailChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
