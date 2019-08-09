import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstancesHealth } from "../model/DescribeInstancesHealth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstancesHealthInput } from "../types/DescribeInstancesHealthInput";
import { DescribeInstancesHealthOutput } from "../types/DescribeInstancesHealthOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeInstancesHealthInput";
export * from "../types/DescribeInstancesHealthOutput";
export * from "../types/DescribeInstancesHealthExceptionsUnion";

export class DescribeInstancesHealthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstancesHealthInput,
      OutputTypesUnion,
      DescribeInstancesHealthOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstancesHealth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstancesHealthInput,
    DescribeInstancesHealthOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstancesHealthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstancesHealthInput,
    DescribeInstancesHealthOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInstancesHealthInput, DescribeInstancesHealthOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
