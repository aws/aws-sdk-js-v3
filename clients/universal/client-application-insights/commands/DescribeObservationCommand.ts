import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeObservation } from "../model/DescribeObservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeObservationInput } from "../types/DescribeObservationInput";
import { DescribeObservationOutput } from "../types/DescribeObservationOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DescribeObservationInput";
export * from "../types/DescribeObservationOutput";
export * from "../types/DescribeObservationExceptionsUnion";

export class DescribeObservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeObservationInput,
      OutputTypesUnion,
      DescribeObservationOutput,
      ApplicationInsightsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeObservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeObservationInput,
    DescribeObservationOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeObservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeObservationInput,
    DescribeObservationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeObservationInput, DescribeObservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
