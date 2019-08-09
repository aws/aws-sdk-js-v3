import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetRiskConfiguration } from "../model/SetRiskConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetRiskConfigurationInput } from "../types/SetRiskConfigurationInput";
import { SetRiskConfigurationOutput } from "../types/SetRiskConfigurationOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/SetRiskConfigurationInput";
export * from "../types/SetRiskConfigurationOutput";
export * from "../types/SetRiskConfigurationExceptionsUnion";

export class SetRiskConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetRiskConfigurationInput,
      OutputTypesUnion,
      SetRiskConfigurationOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = SetRiskConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetRiskConfigurationInput,
    SetRiskConfigurationOutput,
    Blob
  >();

  constructor(readonly input: SetRiskConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetRiskConfigurationInput,
    SetRiskConfigurationOutput
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
      handler<SetRiskConfigurationInput, SetRiskConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
