import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetClientCertificates } from "../model/operations/GetClientCertificates";
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
      Blob
    > {
  readonly model = GetClientCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetClientCertificatesInput,
    GetClientCertificatesOutput,
    Blob
  >();

  constructor(readonly input: GetClientCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
