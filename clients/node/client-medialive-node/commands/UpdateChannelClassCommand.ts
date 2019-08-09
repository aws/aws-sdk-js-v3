import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateChannelClass } from "../model/UpdateChannelClass";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateChannelClassInput } from "../types/UpdateChannelClassInput";
import { UpdateChannelClassOutput } from "../types/UpdateChannelClassOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/UpdateChannelClassInput";
export * from "../types/UpdateChannelClassOutput";
export * from "../types/UpdateChannelClassExceptionsUnion";

export class UpdateChannelClassCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateChannelClassInput,
      OutputTypesUnion,
      UpdateChannelClassOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateChannelClass;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateChannelClassInput,
    UpdateChannelClassOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateChannelClassInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateChannelClassInput,
    UpdateChannelClassOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateChannelClassInput, UpdateChannelClassOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
