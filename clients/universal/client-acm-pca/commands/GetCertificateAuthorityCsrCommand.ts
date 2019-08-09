import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCertificateAuthorityCsr } from "../model/GetCertificateAuthorityCsr";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCertificateAuthorityCsrInput } from "../types/GetCertificateAuthorityCsrInput";
import { GetCertificateAuthorityCsrOutput } from "../types/GetCertificateAuthorityCsrOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/GetCertificateAuthorityCsrInput";
export * from "../types/GetCertificateAuthorityCsrOutput";
export * from "../types/GetCertificateAuthorityCsrExceptionsUnion";

export class GetCertificateAuthorityCsrCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCertificateAuthorityCsrInput,
      OutputTypesUnion,
      GetCertificateAuthorityCsrOutput,
      ACMPCAResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCertificateAuthorityCsr;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCertificateAuthorityCsrInput,
    GetCertificateAuthorityCsrOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCertificateAuthorityCsrInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCertificateAuthorityCsrInput,
    GetCertificateAuthorityCsrOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCertificateAuthorityCsrInput,
        GetCertificateAuthorityCsrOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
