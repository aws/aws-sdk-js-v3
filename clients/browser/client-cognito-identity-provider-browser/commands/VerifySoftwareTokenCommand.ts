import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { VerifySoftwareToken } from "../model/operations/VerifySoftwareToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VerifySoftwareTokenInput } from "../types/VerifySoftwareTokenInput";
import { VerifySoftwareTokenOutput } from "../types/VerifySoftwareTokenOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/VerifySoftwareTokenInput";
export * from "../types/VerifySoftwareTokenOutput";
export * from "../types/VerifySoftwareTokenExceptionsUnion";

export class VerifySoftwareTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VerifySoftwareTokenInput,
      OutputTypesUnion,
      VerifySoftwareTokenOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = VerifySoftwareToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifySoftwareTokenInput,
    VerifySoftwareTokenOutput,
    Blob
  >();

  constructor(readonly input: VerifySoftwareTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    VerifySoftwareTokenInput,
    VerifySoftwareTokenOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        VerifySoftwareTokenInput,
        VerifySoftwareTokenOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<VerifySoftwareTokenInput, VerifySoftwareTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
