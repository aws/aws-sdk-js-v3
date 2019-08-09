import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = UploadSigningCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadSigningCertificateInput,
    UploadSigningCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UploadSigningCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
