import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminConfirmSignUp } from "../model/operations/AdminConfirmSignUp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminConfirmSignUpInput } from "../types/AdminConfirmSignUpInput";
import { AdminConfirmSignUpOutput } from "../types/AdminConfirmSignUpOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminConfirmSignUpInput";
export * from "../types/AdminConfirmSignUpOutput";
export * from "../types/AdminConfirmSignUpExceptionsUnion";

export class AdminConfirmSignUpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminConfirmSignUpInput,
      OutputTypesUnion,
      AdminConfirmSignUpOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminConfirmSignUp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminConfirmSignUpInput,
    AdminConfirmSignUpOutput,
    Blob
  >();

  constructor(readonly input: AdminConfirmSignUpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminConfirmSignUpInput,
    AdminConfirmSignUpOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminConfirmSignUpInput,
        AdminConfirmSignUpOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminConfirmSignUpInput, AdminConfirmSignUpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
