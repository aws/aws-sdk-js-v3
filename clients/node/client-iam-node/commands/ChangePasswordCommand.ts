import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ChangePassword } from "../model/ChangePassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ChangePasswordInput } from "../types/ChangePasswordInput";
import { ChangePasswordOutput } from "../types/ChangePasswordOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ChangePasswordInput";
export * from "../types/ChangePasswordOutput";
export * from "../types/ChangePasswordExceptionsUnion";

export class ChangePasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ChangePasswordInput,
      OutputTypesUnion,
      ChangePasswordOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ChangePassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ChangePasswordInput,
    ChangePasswordOutput,
    _stream.Readable
  >();

  constructor(readonly input: ChangePasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ChangePasswordInput, ChangePasswordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ChangePasswordInput, ChangePasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
