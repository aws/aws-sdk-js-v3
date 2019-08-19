import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePartnerEventSource } from "../model/operations/DescribePartnerEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePartnerEventSourceInput } from "../types/DescribePartnerEventSourceInput";
import { DescribePartnerEventSourceOutput } from "../types/DescribePartnerEventSourceOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/DescribePartnerEventSourceInput";
export * from "../types/DescribePartnerEventSourceOutput";
export * from "../types/DescribePartnerEventSourceExceptionsUnion";

export class DescribePartnerEventSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePartnerEventSourceInput,
      OutputTypesUnion,
      DescribePartnerEventSourceOutput,
      EventBridgeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePartnerEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePartnerEventSourceInput,
    DescribePartnerEventSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePartnerEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePartnerEventSourceInput,
    DescribePartnerEventSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribePartnerEventSourceInput,
        DescribePartnerEventSourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
