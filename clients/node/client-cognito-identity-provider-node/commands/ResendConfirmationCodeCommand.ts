import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResendConfirmationCode } from "../model/ResendConfirmationCode";
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
      _stream.Readable
    > {
  readonly model = ResendConfirmationCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResendConfirmationCodeInput,
    ResendConfirmationCodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResendConfirmationCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
