import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTasks } from "../model/DescribeTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTasksInput } from "../types/DescribeTasksInput";
import { DescribeTasksOutput } from "../types/DescribeTasksOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DescribeTasksInput";
export * from "../types/DescribeTasksOutput";
export * from "../types/DescribeTasksExceptionsUnion";

export class DescribeTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTasksInput,
      OutputTypesUnion,
      DescribeTasksOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTasksInput,
    DescribeTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTasksInput, DescribeTasksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTasksInput, DescribeTasksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
