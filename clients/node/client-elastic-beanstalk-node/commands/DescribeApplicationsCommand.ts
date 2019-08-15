import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeApplications } from "../model/operations/DescribeApplications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeApplicationsInput } from "../types/DescribeApplicationsInput";
import { DescribeApplicationsOutput } from "../types/DescribeApplicationsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeApplicationsInput";
export * from "../types/DescribeApplicationsOutput";
export * from "../types/DescribeApplicationsExceptionsUnion";

export class DescribeApplicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeApplicationsInput,
      OutputTypesUnion,
      DescribeApplicationsOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeApplications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeApplicationsInput,
    DescribeApplicationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeApplicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeApplicationsInput,
    DescribeApplicationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeApplicationsInput, DescribeApplicationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
