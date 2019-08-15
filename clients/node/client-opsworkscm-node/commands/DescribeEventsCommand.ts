import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEvents } from "../model/operations/DescribeEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventsInput } from "../types/DescribeEventsInput";
import { DescribeEventsOutput } from "../types/DescribeEventsOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/DescribeEventsInput";
export * from "../types/DescribeEventsOutput";
export * from "../types/DescribeEventsExceptionsUnion";

export class DescribeEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventsInput,
      OutputTypesUnion,
      DescribeEventsOutput,
      OpsWorksCMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventsInput,
    DescribeEventsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeEventsInput, DescribeEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventsInput, DescribeEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
