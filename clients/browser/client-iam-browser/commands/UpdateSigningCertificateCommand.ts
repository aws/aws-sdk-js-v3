import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSigningCertificate } from "../model/operations/UpdateSigningCertificate";
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
      Blob
    > {
  readonly model = UpdateSigningCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSigningCertificateInput,
    UpdateSigningCertificateOutput,
    Blob
  >();

  constructor(readonly input: UpdateSigningCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
