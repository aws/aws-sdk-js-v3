import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteClientCertificate } from "../model/operations/DeleteClientCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClientCertificateInput } from "../types/DeleteClientCertificateInput";
import { DeleteClientCertificateOutput } from "../types/DeleteClientCertificateOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteClientCertificateInput";
export * from "../types/DeleteClientCertificateOutput";
export * from "../types/DeleteClientCertificateExceptionsUnion";

export class DeleteClientCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClientCertificateInput,
      OutputTypesUnion,
      DeleteClientCertificateOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteClientCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClientCertificateInput,
    DeleteClientCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteClientCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClientCertificateInput,
    DeleteClientCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClientCertificateInput, DeleteClientCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
