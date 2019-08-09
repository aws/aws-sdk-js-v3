import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResetPassword } from "../model/ResetPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetPasswordInput } from "../types/ResetPasswordInput";
import { ResetPasswordOutput } from "../types/ResetPasswordOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/ResetPasswordInput";
export * from "../types/ResetPasswordOutput";
export * from "../types/ResetPasswordExceptionsUnion";

export class ResetPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetPasswordInput,
      OutputTypesUnion,
      ResetPasswordOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResetPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetPasswordInput,
    ResetPasswordOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResetPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<ResetPasswordInput, ResetPasswordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetPasswordInput, ResetPasswordOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
