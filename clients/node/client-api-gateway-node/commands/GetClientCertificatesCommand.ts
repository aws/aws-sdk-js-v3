import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetClientCertificates } from "../model/GetClientCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetClientCertificatesInput } from "../types/GetClientCertificatesInput";
import { GetClientCertificatesOutput } from "../types/GetClientCertificatesOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetClientCertificatesInput";
export * from "../types/GetClientCertificatesOutput";
export * from "../types/GetClientCertificatesExceptionsUnion";

export class GetClientCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetClientCertificatesInput,
      OutputTypesUnion,
      GetClientCertificatesOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetClientCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetClientCertificatesInput,
    GetClientCertificatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetClientCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetClientCertificatesInput,
    GetClientCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetClientCertificatesInput, GetClientCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
