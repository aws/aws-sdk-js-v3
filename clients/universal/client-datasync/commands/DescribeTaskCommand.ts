import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTask } from "../model/DescribeTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTaskInput } from "../types/DescribeTaskInput";
import { DescribeTaskOutput } from "../types/DescribeTaskOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DescribeTaskInput";
export * from "../types/DescribeTaskOutput";
export * from "../types/DescribeTaskExceptionsUnion";

export class DescribeTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTaskInput,
      OutputTypesUnion,
      DescribeTaskOutput,
      DataSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTaskInput,
    DescribeTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTaskInput, DescribeTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTaskInput, DescribeTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
