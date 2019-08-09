import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSigningCertificate } from "../model/UpdateSigningCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSigningCertificateInput } from "../types/UpdateSigningCertificateInput";
import { UpdateSigningCertificateOutput } from "../types/UpdateSigningCertificateOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateSigningCertificateInput";
export * from "../types/UpdateSigningCertificateOutput";
export * from "../types/UpdateSigningCertificateExceptionsUnion";

export class UpdateSigningCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSigningCertificateInput,
      OutputTypesUnion,
      UpdateSigningCertificateOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSigningCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSigningCertificateInput,
    UpdateSigningCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSigningCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSigningCertificateInput,
    UpdateSigningCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSigningCertificateInput, UpdateSigningCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
