import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UploadServerCertificate } from "../model/operations/UploadServerCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UploadServerCertificateInput } from "../types/UploadServerCertificateInput";
import { UploadServerCertificateOutput } from "../types/UploadServerCertificateOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UploadServerCertificateInput";
export * from "../types/UploadServerCertificateOutput";
export * from "../types/UploadServerCertificateExceptionsUnion";

export class UploadServerCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UploadServerCertificateInput,
      OutputTypesUnion,
      UploadServerCertificateOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UploadServerCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadServerCertificateInput,
    UploadServerCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UploadServerCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UploadServerCertificateInput,
    UploadServerCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UploadServerCertificateInput, UploadServerCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
