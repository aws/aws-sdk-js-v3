import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSigningCertificate } from "../model/GetSigningCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSigningCertificateInput } from "../types/GetSigningCertificateInput";
import { GetSigningCertificateOutput } from "../types/GetSigningCertificateOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetSigningCertificateInput";
export * from "../types/GetSigningCertificateOutput";
export * from "../types/GetSigningCertificateExceptionsUnion";

export class GetSigningCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSigningCertificateInput,
      OutputTypesUnion,
      GetSigningCertificateOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = GetSigningCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSigningCertificateInput,
    GetSigningCertificateOutput,
    Blob
  >();

  constructor(readonly input: GetSigningCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSigningCertificateInput,
    GetSigningCertificateOutput
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
      handler<GetSigningCertificateInput, GetSigningCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
