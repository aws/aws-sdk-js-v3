import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeListenerCertificates } from "../model/operations/DescribeListenerCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeListenerCertificatesInput } from "../types/DescribeListenerCertificatesInput";
import { DescribeListenerCertificatesOutput } from "../types/DescribeListenerCertificatesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeListenerCertificatesInput";
export * from "../types/DescribeListenerCertificatesOutput";
export * from "../types/DescribeListenerCertificatesExceptionsUnion";

export class DescribeListenerCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeListenerCertificatesInput,
      OutputTypesUnion,
      DescribeListenerCertificatesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeListenerCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeListenerCertificatesInput,
    DescribeListenerCertificatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeListenerCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeListenerCertificatesInput,
    DescribeListenerCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeListenerCertificatesInput,
        DescribeListenerCertificatesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
