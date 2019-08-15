import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAccountLimits } from "../model/operations/DescribeAccountLimits";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAccountLimitsInput } from "../types/DescribeAccountLimitsInput";
import { DescribeAccountLimitsOutput } from "../types/DescribeAccountLimitsOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeAccountLimitsInput";
export * from "../types/DescribeAccountLimitsOutput";
export * from "../types/DescribeAccountLimitsExceptionsUnion";

export class DescribeAccountLimitsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAccountLimitsInput,
      OutputTypesUnion,
      DescribeAccountLimitsOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAccountLimits;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAccountLimitsInput,
    DescribeAccountLimitsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAccountLimitsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAccountLimitsInput,
    DescribeAccountLimitsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAccountLimitsInput, DescribeAccountLimitsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
