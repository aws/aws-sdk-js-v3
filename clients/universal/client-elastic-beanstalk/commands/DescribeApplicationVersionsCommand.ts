import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeApplicationVersions } from "../model/DescribeApplicationVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeApplicationVersionsInput } from "../types/DescribeApplicationVersionsInput";
import { DescribeApplicationVersionsOutput } from "../types/DescribeApplicationVersionsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeApplicationVersionsInput";
export * from "../types/DescribeApplicationVersionsOutput";
export * from "../types/DescribeApplicationVersionsExceptionsUnion";

export class DescribeApplicationVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeApplicationVersionsInput,
      OutputTypesUnion,
      DescribeApplicationVersionsOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeApplicationVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeApplicationVersionsInput,
    DescribeApplicationVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeApplicationVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeApplicationVersionsInput,
    DescribeApplicationVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeApplicationVersionsInput,
        DescribeApplicationVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
