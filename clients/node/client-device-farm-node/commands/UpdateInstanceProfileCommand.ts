import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateInstanceProfile } from "../model/operations/UpdateInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateInstanceProfileInput } from "../types/UpdateInstanceProfileInput";
import { UpdateInstanceProfileOutput } from "../types/UpdateInstanceProfileOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/UpdateInstanceProfileInput";
export * from "../types/UpdateInstanceProfileOutput";
export * from "../types/UpdateInstanceProfileExceptionsUnion";

export class UpdateInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateInstanceProfileInput,
      OutputTypesUnion,
      UpdateInstanceProfileOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateInstanceProfileInput,
    UpdateInstanceProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateInstanceProfileInput,
    UpdateInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateInstanceProfileInput, UpdateInstanceProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
