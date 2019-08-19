import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSubscribersForNotification } from "../model/operations/DescribeSubscribersForNotification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSubscribersForNotificationInput } from "../types/DescribeSubscribersForNotificationInput";
import { DescribeSubscribersForNotificationOutput } from "../types/DescribeSubscribersForNotificationOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DescribeSubscribersForNotificationInput";
export * from "../types/DescribeSubscribersForNotificationOutput";
export * from "../types/DescribeSubscribersForNotificationExceptionsUnion";

export class DescribeSubscribersForNotificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSubscribersForNotificationInput,
      OutputTypesUnion,
      DescribeSubscribersForNotificationOutput,
      BudgetsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSubscribersForNotification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSubscribersForNotificationInput,
    DescribeSubscribersForNotificationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSubscribersForNotificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSubscribersForNotificationInput,
    DescribeSubscribersForNotificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSubscribersForNotificationInput,
        DescribeSubscribersForNotificationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
