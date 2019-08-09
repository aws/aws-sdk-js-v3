import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSigningCertificate } from "../model/DeleteSigningCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSigningCertificateInput } from "../types/DeleteSigningCertificateInput";
import { DeleteSigningCertificateOutput } from "../types/DeleteSigningCertificateOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteSigningCertificateInput";
export * from "../types/DeleteSigningCertificateOutput";
export * from "../types/DeleteSigningCertificateExceptionsUnion";

export class DeleteSigningCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSigningCertificateInput,
      OutputTypesUnion,
      DeleteSigningCertificateOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSigningCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSigningCertificateInput,
    DeleteSigningCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSigningCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSigningCertificateInput,
    DeleteSigningCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSigningCertificateInput, DeleteSigningCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
