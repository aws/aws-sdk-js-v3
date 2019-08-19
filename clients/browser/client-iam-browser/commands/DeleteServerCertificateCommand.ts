import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteServerCertificate } from "../model/operations/DeleteServerCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServerCertificateInput } from "../types/DeleteServerCertificateInput";
import { DeleteServerCertificateOutput } from "../types/DeleteServerCertificateOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteServerCertificateInput";
export * from "../types/DeleteServerCertificateOutput";
export * from "../types/DeleteServerCertificateExceptionsUnion";

export class DeleteServerCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServerCertificateInput,
      OutputTypesUnion,
      DeleteServerCertificateOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteServerCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServerCertificateInput,
    DeleteServerCertificateOutput,
    Blob
  >();

  constructor(readonly input: DeleteServerCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteServerCertificateInput,
    DeleteServerCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteServerCertificateInput, DeleteServerCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
