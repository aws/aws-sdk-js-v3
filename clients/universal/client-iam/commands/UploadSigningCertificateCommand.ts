import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UploadSigningCertificate } from "../model/UploadSigningCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UploadSigningCertificateInput } from "../types/UploadSigningCertificateInput";
import { UploadSigningCertificateOutput } from "../types/UploadSigningCertificateOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UploadSigningCertificateInput";
export * from "../types/UploadSigningCertificateOutput";
export * from "../types/UploadSigningCertificateExceptionsUnion";

export class UploadSigningCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UploadSigningCertificateInput,
      OutputTypesUnion,
      UploadSigningCertificateOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UploadSigningCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadSigningCertificateInput,
    UploadSigningCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: UploadSigningCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UploadSigningCertificateInput,
    UploadSigningCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UploadSigningCertificateInput, UploadSigningCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
