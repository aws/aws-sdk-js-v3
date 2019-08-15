import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCertificateAuthorityCertificate } from "../model/operations/GetCertificateAuthorityCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCertificateAuthorityCertificateInput } from "../types/GetCertificateAuthorityCertificateInput";
import { GetCertificateAuthorityCertificateOutput } from "../types/GetCertificateAuthorityCertificateOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/GetCertificateAuthorityCertificateInput";
export * from "../types/GetCertificateAuthorityCertificateOutput";
export * from "../types/GetCertificateAuthorityCertificateExceptionsUnion";

export class GetCertificateAuthorityCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCertificateAuthorityCertificateInput,
      OutputTypesUnion,
      GetCertificateAuthorityCertificateOutput,
      ACMPCAResolvedConfiguration,
      Blob
    > {
  readonly model = GetCertificateAuthorityCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCertificateAuthorityCertificateInput,
    GetCertificateAuthorityCertificateOutput,
    Blob
  >();

  constructor(readonly input: GetCertificateAuthorityCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCertificateAuthorityCertificateInput,
    GetCertificateAuthorityCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCertificateAuthorityCertificateInput,
        GetCertificateAuthorityCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
