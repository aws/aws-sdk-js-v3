import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExportCertificate } from "../model/ExportCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportCertificateInput } from "../types/ExportCertificateInput";
import { ExportCertificateOutput } from "../types/ExportCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/ExportCertificateInput";
export * from "../types/ExportCertificateOutput";
export * from "../types/ExportCertificateExceptionsUnion";

export class ExportCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportCertificateInput,
      OutputTypesUnion,
      ExportCertificateOutput,
      ACMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ExportCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportCertificateInput,
    ExportCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: ExportCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<ExportCertificateInput, ExportCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExportCertificateInput, ExportCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
