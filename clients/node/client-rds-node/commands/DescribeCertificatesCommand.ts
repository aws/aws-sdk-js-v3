import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCertificates } from "../model/DescribeCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCertificatesInput } from "../types/DescribeCertificatesInput";
import { DescribeCertificatesOutput } from "../types/DescribeCertificatesOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeCertificatesInput";
export * from "../types/DescribeCertificatesOutput";
export * from "../types/DescribeCertificatesExceptionsUnion";

export class DescribeCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCertificatesInput,
      OutputTypesUnion,
      DescribeCertificatesOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCertificatesInput,
    DescribeCertificatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCertificatesInput,
    DescribeCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCertificatesInput, DescribeCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
