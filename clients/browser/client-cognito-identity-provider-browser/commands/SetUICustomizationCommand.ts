import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetUICustomization } from "../model/operations/SetUICustomization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetUICustomizationInput } from "../types/SetUICustomizationInput";
import { SetUICustomizationOutput } from "../types/SetUICustomizationOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/SetUICustomizationInput";
export * from "../types/SetUICustomizationOutput";
export * from "../types/SetUICustomizationExceptionsUnion";

export class SetUICustomizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetUICustomizationInput,
      OutputTypesUnion,
      SetUICustomizationOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = SetUICustomization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetUICustomizationInput,
    SetUICustomizationOutput,
    Blob
  >();

  constructor(readonly input: SetUICustomizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetUICustomizationInput,
    SetUICustomizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        SetUICustomizationInput,
        SetUICustomizationOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<SetUICustomizationInput, SetUICustomizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
