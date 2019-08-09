import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInput } from "../model/DescribeInput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInputInput } from "../types/DescribeInputInput";
import { DescribeInputOutput } from "../types/DescribeInputOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/DescribeInputInput";
export * from "../types/DescribeInputOutput";
export * from "../types/DescribeInputExceptionsUnion";

export class DescribeInputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInputInput,
      OutputTypesUnion,
      DescribeInputOutput,
      IoTEventsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeInput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInputInput,
    DescribeInputOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeInputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeInputInput, DescribeInputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInputInput, DescribeInputOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
