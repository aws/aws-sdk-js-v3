import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScheduledActions } from "../model/DescribeScheduledActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScheduledActionsInput } from "../types/DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "../types/DescribeScheduledActionsOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/DescribeScheduledActionsInput";
export * from "../types/DescribeScheduledActionsOutput";
export * from "../types/DescribeScheduledActionsExceptionsUnion";

export class DescribeScheduledActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScheduledActionsInput,
      OutputTypesUnion,
      DescribeScheduledActionsOutput,
      ApplicationAutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeScheduledActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScheduledActionsInput,
    DescribeScheduledActionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeScheduledActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScheduledActionsInput,
    DescribeScheduledActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScheduledActionsInput, DescribeScheduledActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
