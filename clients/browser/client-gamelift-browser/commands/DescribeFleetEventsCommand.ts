import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFleetEvents } from "../model/DescribeFleetEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetEventsInput } from "../types/DescribeFleetEventsInput";
import { DescribeFleetEventsOutput } from "../types/DescribeFleetEventsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeFleetEventsInput";
export * from "../types/DescribeFleetEventsOutput";
export * from "../types/DescribeFleetEventsExceptionsUnion";

export class DescribeFleetEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetEventsInput,
      OutputTypesUnion,
      DescribeFleetEventsOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeFleetEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetEventsInput,
    DescribeFleetEventsOutput,
    Blob
  >();

  constructor(readonly input: DescribeFleetEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetEventsInput,
    DescribeFleetEventsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetEventsInput, DescribeFleetEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
