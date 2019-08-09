import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUserAttributeVerificationCode } from "../model/GetUserAttributeVerificationCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserAttributeVerificationCodeInput } from "../types/GetUserAttributeVerificationCodeInput";
import { GetUserAttributeVerificationCodeOutput } from "../types/GetUserAttributeVerificationCodeOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetUserAttributeVerificationCodeInput";
export * from "../types/GetUserAttributeVerificationCodeOutput";
export * from "../types/GetUserAttributeVerificationCodeExceptionsUnion";

export class GetUserAttributeVerificationCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserAttributeVerificationCodeInput,
      OutputTypesUnion,
      GetUserAttributeVerificationCodeOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUserAttributeVerificationCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserAttributeVerificationCodeInput,
    GetUserAttributeVerificationCodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUserAttributeVerificationCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetUserAttributeVerificationCodeInput,
    GetUserAttributeVerificationCodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetUserAttributeVerificationCodeInput,
        GetUserAttributeVerificationCodeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
