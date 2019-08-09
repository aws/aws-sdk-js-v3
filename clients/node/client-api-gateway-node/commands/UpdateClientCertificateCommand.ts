import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateClientCertificate } from "../model/UpdateClientCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateClientCertificateInput } from "../types/UpdateClientCertificateInput";
import { UpdateClientCertificateOutput } from "../types/UpdateClientCertificateOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateClientCertificateInput";
export * from "../types/UpdateClientCertificateOutput";
export * from "../types/UpdateClientCertificateExceptionsUnion";

export class UpdateClientCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateClientCertificateInput,
      OutputTypesUnion,
      UpdateClientCertificateOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateClientCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateClientCertificateInput,
    UpdateClientCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateClientCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateClientCertificateInput,
    UpdateClientCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateClientCertificateInput, UpdateClientCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
