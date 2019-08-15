import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeListeners } from "../model/operations/DescribeListeners";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeListenersInput } from "../types/DescribeListenersInput";
import { DescribeListenersOutput } from "../types/DescribeListenersOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeListenersInput";
export * from "../types/DescribeListenersOutput";
export * from "../types/DescribeListenersExceptionsUnion";

export class DescribeListenersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeListenersInput,
      OutputTypesUnion,
      DescribeListenersOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeListeners;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeListenersInput,
    DescribeListenersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeListenersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeListenersInput, DescribeListenersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeListenersInput, DescribeListenersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
