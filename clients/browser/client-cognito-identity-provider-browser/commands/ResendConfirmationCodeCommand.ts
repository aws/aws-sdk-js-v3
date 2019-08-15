import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResendConfirmationCode } from "../model/operations/ResendConfirmationCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResendConfirmationCodeInput } from "../types/ResendConfirmationCodeInput";
import { ResendConfirmationCodeOutput } from "../types/ResendConfirmationCodeOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ResendConfirmationCodeInput";
export * from "../types/ResendConfirmationCodeOutput";
export * from "../types/ResendConfirmationCodeExceptionsUnion";

export class ResendConfirmationCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResendConfirmationCodeInput,
      OutputTypesUnion,
      ResendConfirmationCodeOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ResendConfirmationCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResendConfirmationCodeInput,
    ResendConfirmationCodeOutput,
    Blob
  >();

  constructor(readonly input: ResendConfirmationCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResendConfirmationCodeInput,
    ResendConfirmationCodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResendConfirmationCodeInput, ResendConfirmationCodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
