import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEnvironmentHealth } from "../model/DescribeEnvironmentHealth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentHealthInput } from "../types/DescribeEnvironmentHealthInput";
import { DescribeEnvironmentHealthOutput } from "../types/DescribeEnvironmentHealthOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeEnvironmentHealthInput";
export * from "../types/DescribeEnvironmentHealthOutput";
export * from "../types/DescribeEnvironmentHealthExceptionsUnion";

export class DescribeEnvironmentHealthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentHealthInput,
      OutputTypesUnion,
      DescribeEnvironmentHealthOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEnvironmentHealth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentHealthInput,
    DescribeEnvironmentHealthOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEnvironmentHealthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentHealthInput,
    DescribeEnvironmentHealthOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEnvironmentHealthInput, DescribeEnvironmentHealthOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
