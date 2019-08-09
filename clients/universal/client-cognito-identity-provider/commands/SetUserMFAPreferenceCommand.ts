import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetUserMFAPreference } from "../model/SetUserMFAPreference";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetUserMFAPreferenceInput } from "../types/SetUserMFAPreferenceInput";
import { SetUserMFAPreferenceOutput } from "../types/SetUserMFAPreferenceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/SetUserMFAPreferenceInput";
export * from "../types/SetUserMFAPreferenceOutput";
export * from "../types/SetUserMFAPreferenceExceptionsUnion";

export class SetUserMFAPreferenceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetUserMFAPreferenceInput,
      OutputTypesUnion,
      SetUserMFAPreferenceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetUserMFAPreference;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetUserMFAPreferenceInput,
    SetUserMFAPreferenceOutput,
    Uint8Array
  >();

  constructor(readonly input: SetUserMFAPreferenceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetUserMFAPreferenceInput,
    SetUserMFAPreferenceOutput
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
        Uint8Array
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<SetUserMFAPreferenceInput, SetUserMFAPreferenceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
