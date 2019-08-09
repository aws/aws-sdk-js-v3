import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTaskExecution } from "../model/DescribeTaskExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTaskExecutionInput } from "../types/DescribeTaskExecutionInput";
import { DescribeTaskExecutionOutput } from "../types/DescribeTaskExecutionOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DescribeTaskExecutionInput";
export * from "../types/DescribeTaskExecutionOutput";
export * from "../types/DescribeTaskExecutionExceptionsUnion";

export class DescribeTaskExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTaskExecutionInput,
      OutputTypesUnion,
      DescribeTaskExecutionOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTaskExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTaskExecutionInput,
    DescribeTaskExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTaskExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTaskExecutionInput,
    DescribeTaskExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTaskExecutionInput, DescribeTaskExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
