import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstanceHealth } from "../model/DescribeInstanceHealth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstanceHealthInput } from "../types/DescribeInstanceHealthInput";
import { DescribeInstanceHealthOutput } from "../types/DescribeInstanceHealthOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DescribeInstanceHealthInput";
export * from "../types/DescribeInstanceHealthOutput";
export * from "../types/DescribeInstanceHealthExceptionsUnion";

export class DescribeInstanceHealthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstanceHealthInput,
      OutputTypesUnion,
      DescribeInstanceHealthOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstanceHealth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstanceHealthInput,
    DescribeInstanceHealthOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstanceHealthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstanceHealthInput,
    DescribeInstanceHealthOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInstanceHealthInput, DescribeInstanceHealthOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
