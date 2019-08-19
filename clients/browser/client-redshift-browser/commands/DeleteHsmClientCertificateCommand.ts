import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteHsmClientCertificate } from "../model/operations/DeleteHsmClientCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteHsmClientCertificateInput } from "../types/DeleteHsmClientCertificateInput";
import { DeleteHsmClientCertificateOutput } from "../types/DeleteHsmClientCertificateOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteHsmClientCertificateInput";
export * from "../types/DeleteHsmClientCertificateOutput";
export * from "../types/DeleteHsmClientCertificateExceptionsUnion";

export class DeleteHsmClientCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteHsmClientCertificateInput,
      OutputTypesUnion,
      DeleteHsmClientCertificateOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteHsmClientCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteHsmClientCertificateInput,
    DeleteHsmClientCertificateOutput,
    Blob
  >();

  constructor(readonly input: DeleteHsmClientCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteHsmClientCertificateInput,
    DeleteHsmClientCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteHsmClientCertificateInput,
        DeleteHsmClientCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
