import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEnvironmentResources } from "../model/DescribeEnvironmentResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentResourcesInput } from "../types/DescribeEnvironmentResourcesInput";
import { DescribeEnvironmentResourcesOutput } from "../types/DescribeEnvironmentResourcesOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeEnvironmentResourcesInput";
export * from "../types/DescribeEnvironmentResourcesOutput";
export * from "../types/DescribeEnvironmentResourcesExceptionsUnion";

export class DescribeEnvironmentResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentResourcesInput,
      OutputTypesUnion,
      DescribeEnvironmentResourcesOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEnvironmentResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentResourcesInput,
    DescribeEnvironmentResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEnvironmentResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentResourcesInput,
    DescribeEnvironmentResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEnvironmentResourcesInput,
        DescribeEnvironmentResourcesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
