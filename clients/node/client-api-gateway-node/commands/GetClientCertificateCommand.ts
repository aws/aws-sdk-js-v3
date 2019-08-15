import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetClientCertificate } from "../model/operations/GetClientCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetClientCertificateInput } from "../types/GetClientCertificateInput";
import { GetClientCertificateOutput } from "../types/GetClientCertificateOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetClientCertificateInput";
export * from "../types/GetClientCertificateOutput";
export * from "../types/GetClientCertificateExceptionsUnion";

export class GetClientCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetClientCertificateInput,
      OutputTypesUnion,
      GetClientCertificateOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetClientCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetClientCertificateInput,
    GetClientCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetClientCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetClientCertificateInput,
    GetClientCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetClientCertificateInput, GetClientCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
