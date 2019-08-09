import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminSetUserSettings } from "../model/AdminSetUserSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminSetUserSettingsInput } from "../types/AdminSetUserSettingsInput";
import { AdminSetUserSettingsOutput } from "../types/AdminSetUserSettingsOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminSetUserSettingsInput";
export * from "../types/AdminSetUserSettingsOutput";
export * from "../types/AdminSetUserSettingsExceptionsUnion";

export class AdminSetUserSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminSetUserSettingsInput,
      OutputTypesUnion,
      AdminSetUserSettingsOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminSetUserSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminSetUserSettingsInput,
    AdminSetUserSettingsOutput,
    Blob
  >();

  constructor(readonly input: AdminSetUserSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminSetUserSettingsInput,
    AdminSetUserSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        InputTypesUnion,
        OutputTypesUnion,
        Blob
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminSetUserSettingsInput, AdminSetUserSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
