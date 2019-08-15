import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeImportTasks } from "../model/operations/DescribeImportTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeImportTasksInput } from "../types/DescribeImportTasksInput";
import { DescribeImportTasksOutput } from "../types/DescribeImportTasksOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/DescribeImportTasksInput";
export * from "../types/DescribeImportTasksOutput";
export * from "../types/DescribeImportTasksExceptionsUnion";

export class DescribeImportTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeImportTasksInput,
      OutputTypesUnion,
      DescribeImportTasksOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeImportTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeImportTasksInput,
    DescribeImportTasksOutput,
    Blob
  >();

  constructor(readonly input: DescribeImportTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeImportTasksInput,
    DescribeImportTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeImportTasksInput, DescribeImportTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
