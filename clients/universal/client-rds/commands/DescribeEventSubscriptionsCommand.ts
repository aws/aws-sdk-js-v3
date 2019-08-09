import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventSubscriptions } from "../model/DescribeEventSubscriptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventSubscriptionsInput } from "../types/DescribeEventSubscriptionsInput";
import { DescribeEventSubscriptionsOutput } from "../types/DescribeEventSubscriptionsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeEventSubscriptionsInput";
export * from "../types/DescribeEventSubscriptionsOutput";
export * from "../types/DescribeEventSubscriptionsExceptionsUnion";

export class DescribeEventSubscriptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventSubscriptionsInput,
      OutputTypesUnion,
      DescribeEventSubscriptionsOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEventSubscriptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventSubscriptionsInput,
    DescribeEventSubscriptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEventSubscriptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventSubscriptionsInput,
    DescribeEventSubscriptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEventSubscriptionsInput,
        DescribeEventSubscriptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
