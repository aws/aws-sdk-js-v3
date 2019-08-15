import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCACertificate } from "../model/operations/DeleteCACertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCACertificateInput } from "../types/DeleteCACertificateInput";
import { DeleteCACertificateOutput } from "../types/DeleteCACertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteCACertificateInput";
export * from "../types/DeleteCACertificateOutput";
export * from "../types/DeleteCACertificateExceptionsUnion";

export class DeleteCACertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCACertificateInput,
      OutputTypesUnion,
      DeleteCACertificateOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCACertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCACertificateInput,
    DeleteCACertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCACertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCACertificateInput,
    DeleteCACertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCACertificateInput, DeleteCACertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
