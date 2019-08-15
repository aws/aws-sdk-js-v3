import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GenerateClientCertificate } from "../model/operations/GenerateClientCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateClientCertificateInput } from "../types/GenerateClientCertificateInput";
import { GenerateClientCertificateOutput } from "../types/GenerateClientCertificateOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GenerateClientCertificateInput";
export * from "../types/GenerateClientCertificateOutput";
export * from "../types/GenerateClientCertificateExceptionsUnion";

export class GenerateClientCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateClientCertificateInput,
      OutputTypesUnion,
      GenerateClientCertificateOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GenerateClientCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateClientCertificateInput,
    GenerateClientCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GenerateClientCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GenerateClientCertificateInput,
    GenerateClientCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GenerateClientCertificateInput, GenerateClientCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
