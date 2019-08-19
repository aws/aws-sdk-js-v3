import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConversionTasks } from "../model/operations/DescribeConversionTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConversionTasksInput } from "../types/DescribeConversionTasksInput";
import { DescribeConversionTasksOutput } from "../types/DescribeConversionTasksOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeConversionTasksInput";
export * from "../types/DescribeConversionTasksOutput";
export * from "../types/DescribeConversionTasksExceptionsUnion";

export class DescribeConversionTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConversionTasksInput,
      OutputTypesUnion,
      DescribeConversionTasksOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeConversionTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConversionTasksInput,
    DescribeConversionTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConversionTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConversionTasksInput,
    DescribeConversionTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConversionTasksInput, DescribeConversionTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
