import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConfirmForgotPassword } from "../model/operations/ConfirmForgotPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmForgotPasswordInput } from "../types/ConfirmForgotPasswordInput";
import { ConfirmForgotPasswordOutput } from "../types/ConfirmForgotPasswordOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ConfirmForgotPasswordInput";
export * from "../types/ConfirmForgotPasswordOutput";
export * from "../types/ConfirmForgotPasswordExceptionsUnion";

export class ConfirmForgotPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmForgotPasswordInput,
      OutputTypesUnion,
      ConfirmForgotPasswordOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ConfirmForgotPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmForgotPasswordInput,
    ConfirmForgotPasswordOutput,
    Blob
  >();

  constructor(readonly input: ConfirmForgotPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConfirmForgotPasswordInput,
    ConfirmForgotPasswordOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConfirmForgotPasswordInput, ConfirmForgotPasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
