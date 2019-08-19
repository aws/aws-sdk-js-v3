import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCertificate } from "../model/operations/DescribeCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCertificateInput } from "../types/DescribeCertificateInput";
import { DescribeCertificateOutput } from "../types/DescribeCertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeCertificateInput";
export * from "../types/DescribeCertificateOutput";
export * from "../types/DescribeCertificateExceptionsUnion";

export class DescribeCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCertificateInput,
      OutputTypesUnion,
      DescribeCertificateOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCertificateInput,
    DescribeCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCertificateInput,
    DescribeCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCertificateInput, DescribeCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
