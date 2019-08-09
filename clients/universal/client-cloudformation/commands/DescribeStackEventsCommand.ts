import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackEvents } from "../model/DescribeStackEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackEventsInput } from "../types/DescribeStackEventsInput";
import { DescribeStackEventsOutput } from "../types/DescribeStackEventsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackEventsInput";
export * from "../types/DescribeStackEventsOutput";
export * from "../types/DescribeStackEventsExceptionsUnion";

export class DescribeStackEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackEventsInput,
      OutputTypesUnion,
      DescribeStackEventsOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeStackEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackEventsInput,
    DescribeStackEventsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeStackEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackEventsInput,
    DescribeStackEventsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackEventsInput, DescribeStackEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
