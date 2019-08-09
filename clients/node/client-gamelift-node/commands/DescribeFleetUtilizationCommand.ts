import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFleetUtilization } from "../model/DescribeFleetUtilization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetUtilizationInput } from "../types/DescribeFleetUtilizationInput";
import { DescribeFleetUtilizationOutput } from "../types/DescribeFleetUtilizationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeFleetUtilizationInput";
export * from "../types/DescribeFleetUtilizationOutput";
export * from "../types/DescribeFleetUtilizationExceptionsUnion";

export class DescribeFleetUtilizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetUtilizationInput,
      OutputTypesUnion,
      DescribeFleetUtilizationOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFleetUtilization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetUtilizationInput,
    DescribeFleetUtilizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFleetUtilizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetUtilizationInput,
    DescribeFleetUtilizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetUtilizationInput, DescribeFleetUtilizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
