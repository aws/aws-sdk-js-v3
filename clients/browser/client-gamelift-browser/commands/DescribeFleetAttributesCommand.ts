import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFleetAttributes } from "../model/operations/DescribeFleetAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetAttributesInput } from "../types/DescribeFleetAttributesInput";
import { DescribeFleetAttributesOutput } from "../types/DescribeFleetAttributesOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeFleetAttributesInput";
export * from "../types/DescribeFleetAttributesOutput";
export * from "../types/DescribeFleetAttributesExceptionsUnion";

export class DescribeFleetAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetAttributesInput,
      OutputTypesUnion,
      DescribeFleetAttributesOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeFleetAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetAttributesInput,
    DescribeFleetAttributesOutput,
    Blob
  >();

  constructor(readonly input: DescribeFleetAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetAttributesInput,
    DescribeFleetAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetAttributesInput, DescribeFleetAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
