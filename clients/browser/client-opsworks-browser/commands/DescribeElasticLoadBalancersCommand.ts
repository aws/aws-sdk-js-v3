import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeElasticLoadBalancers } from "../model/operations/DescribeElasticLoadBalancers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticLoadBalancersInput } from "../types/DescribeElasticLoadBalancersInput";
import { DescribeElasticLoadBalancersOutput } from "../types/DescribeElasticLoadBalancersOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeElasticLoadBalancersInput";
export * from "../types/DescribeElasticLoadBalancersOutput";
export * from "../types/DescribeElasticLoadBalancersExceptionsUnion";

export class DescribeElasticLoadBalancersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticLoadBalancersInput,
      OutputTypesUnion,
      DescribeElasticLoadBalancersOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeElasticLoadBalancers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticLoadBalancersInput,
    DescribeElasticLoadBalancersOutput,
    Blob
  >();

  constructor(readonly input: DescribeElasticLoadBalancersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticLoadBalancersInput,
    DescribeElasticLoadBalancersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeElasticLoadBalancersInput,
        DescribeElasticLoadBalancersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
