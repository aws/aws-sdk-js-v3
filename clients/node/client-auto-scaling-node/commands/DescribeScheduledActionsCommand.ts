import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeScheduledActions } from "../model/DescribeScheduledActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScheduledActionsInput } from "../types/DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "../types/DescribeScheduledActionsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
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
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeScheduledActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScheduledActionsInput,
    DescribeScheduledActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeScheduledActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
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
