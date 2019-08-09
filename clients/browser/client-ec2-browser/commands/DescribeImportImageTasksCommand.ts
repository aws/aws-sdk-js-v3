import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeImportImageTasks } from "../model/DescribeImportImageTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeImportImageTasksInput } from "../types/DescribeImportImageTasksInput";
import { DescribeImportImageTasksOutput } from "../types/DescribeImportImageTasksOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeImportImageTasksInput";
export * from "../types/DescribeImportImageTasksOutput";
export * from "../types/DescribeImportImageTasksExceptionsUnion";

export class DescribeImportImageTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeImportImageTasksInput,
      OutputTypesUnion,
      DescribeImportImageTasksOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeImportImageTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeImportImageTasksInput,
    DescribeImportImageTasksOutput,
    Blob
  >();

  constructor(readonly input: DescribeImportImageTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeImportImageTasksInput,
    DescribeImportImageTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeImportImageTasksInput, DescribeImportImageTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
