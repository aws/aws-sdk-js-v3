import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEnvironmentManagedActionHistory } from "../model/DescribeEnvironmentManagedActionHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentManagedActionHistoryInput } from "../types/DescribeEnvironmentManagedActionHistoryInput";
import { DescribeEnvironmentManagedActionHistoryOutput } from "../types/DescribeEnvironmentManagedActionHistoryOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeEnvironmentManagedActionHistoryInput";
export * from "../types/DescribeEnvironmentManagedActionHistoryOutput";
export * from "../types/DescribeEnvironmentManagedActionHistoryExceptionsUnion";

export class DescribeEnvironmentManagedActionHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentManagedActionHistoryInput,
      OutputTypesUnion,
      DescribeEnvironmentManagedActionHistoryOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEnvironmentManagedActionHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentManagedActionHistoryInput,
    DescribeEnvironmentManagedActionHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEnvironmentManagedActionHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentManagedActionHistoryInput,
    DescribeEnvironmentManagedActionHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEnvironmentManagedActionHistoryInput,
        DescribeEnvironmentManagedActionHistoryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
