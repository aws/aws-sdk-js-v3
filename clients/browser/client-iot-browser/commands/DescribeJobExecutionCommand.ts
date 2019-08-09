import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeJobExecution } from "../model/DescribeJobExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeJobExecutionInput } from "../types/DescribeJobExecutionInput";
import { DescribeJobExecutionOutput } from "../types/DescribeJobExecutionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeJobExecutionInput";
export * from "../types/DescribeJobExecutionOutput";
export * from "../types/DescribeJobExecutionExceptionsUnion";

export class DescribeJobExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeJobExecutionInput,
      OutputTypesUnion,
      DescribeJobExecutionOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeJobExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeJobExecutionInput,
    DescribeJobExecutionOutput,
    Blob
  >();

  constructor(readonly input: DescribeJobExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeJobExecutionInput,
    DescribeJobExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeJobExecutionInput, DescribeJobExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
