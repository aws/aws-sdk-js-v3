import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminSetUserMFAPreference } from "../model/operations/AdminSetUserMFAPreference";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminSetUserMFAPreferenceInput } from "../types/AdminSetUserMFAPreferenceInput";
import { AdminSetUserMFAPreferenceOutput } from "../types/AdminSetUserMFAPreferenceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminSetUserMFAPreferenceInput";
export * from "../types/AdminSetUserMFAPreferenceOutput";
export * from "../types/AdminSetUserMFAPreferenceExceptionsUnion";

export class AdminSetUserMFAPreferenceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminSetUserMFAPreferenceInput,
      OutputTypesUnion,
      AdminSetUserMFAPreferenceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminSetUserMFAPreference;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminSetUserMFAPreferenceInput,
    AdminSetUserMFAPreferenceOutput,
    Blob
  >();

  constructor(readonly input: AdminSetUserMFAPreferenceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminSetUserMFAPreferenceInput,
    AdminSetUserMFAPreferenceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminSetUserMFAPreferenceInput,
        AdminSetUserMFAPreferenceOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminSetUserMFAPreferenceInput, AdminSetUserMFAPreferenceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
