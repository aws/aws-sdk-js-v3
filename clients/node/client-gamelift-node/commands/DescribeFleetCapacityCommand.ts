import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFleetCapacity } from "../model/DescribeFleetCapacity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetCapacityInput } from "../types/DescribeFleetCapacityInput";
import { DescribeFleetCapacityOutput } from "../types/DescribeFleetCapacityOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeFleetCapacityInput";
export * from "../types/DescribeFleetCapacityOutput";
export * from "../types/DescribeFleetCapacityExceptionsUnion";

export class DescribeFleetCapacityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetCapacityInput,
      OutputTypesUnion,
      DescribeFleetCapacityOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFleetCapacity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetCapacityInput,
    DescribeFleetCapacityOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFleetCapacityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetCapacityInput,
    DescribeFleetCapacityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetCapacityInput, DescribeFleetCapacityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
