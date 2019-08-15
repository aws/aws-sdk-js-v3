import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCertificate } from "../model/operations/DeleteCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCertificateInput } from "../types/DeleteCertificateInput";
import { DeleteCertificateOutput } from "../types/DeleteCertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteCertificateInput";
export * from "../types/DeleteCertificateOutput";
export * from "../types/DeleteCertificateExceptionsUnion";

export class DeleteCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCertificateInput,
      OutputTypesUnion,
      DeleteCertificateOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCertificateInput,
    DeleteCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteCertificateInput, DeleteCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCertificateInput, DeleteCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
