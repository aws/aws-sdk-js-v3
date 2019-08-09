import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeNotificationSubscriptions } from "../model/DescribeNotificationSubscriptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNotificationSubscriptionsInput } from "../types/DescribeNotificationSubscriptionsInput";
import { DescribeNotificationSubscriptionsOutput } from "../types/DescribeNotificationSubscriptionsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeNotificationSubscriptionsInput";
export * from "../types/DescribeNotificationSubscriptionsOutput";
export * from "../types/DescribeNotificationSubscriptionsExceptionsUnion";

export class DescribeNotificationSubscriptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNotificationSubscriptionsInput,
      OutputTypesUnion,
      DescribeNotificationSubscriptionsOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeNotificationSubscriptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNotificationSubscriptionsInput,
    DescribeNotificationSubscriptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeNotificationSubscriptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNotificationSubscriptionsInput,
    DescribeNotificationSubscriptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeNotificationSubscriptionsInput,
        DescribeNotificationSubscriptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
