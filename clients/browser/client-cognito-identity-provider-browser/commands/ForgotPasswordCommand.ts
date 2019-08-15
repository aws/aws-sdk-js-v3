import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ForgotPassword } from "../model/operations/ForgotPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ForgotPasswordInput } from "../types/ForgotPasswordInput";
import { ForgotPasswordOutput } from "../types/ForgotPasswordOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ForgotPasswordInput";
export * from "../types/ForgotPasswordOutput";
export * from "../types/ForgotPasswordExceptionsUnion";

export class ForgotPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ForgotPasswordInput,
      OutputTypesUnion,
      ForgotPasswordOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ForgotPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ForgotPasswordInput,
    ForgotPasswordOutput,
    Blob
  >();

  constructor(readonly input: ForgotPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<ForgotPasswordInput, ForgotPasswordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ForgotPasswordInput, ForgotPasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
