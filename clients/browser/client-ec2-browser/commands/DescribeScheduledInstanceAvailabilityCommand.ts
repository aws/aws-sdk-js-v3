import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScheduledInstanceAvailability } from "../model/DescribeScheduledInstanceAvailability";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScheduledInstanceAvailabilityInput } from "../types/DescribeScheduledInstanceAvailabilityInput";
import { DescribeScheduledInstanceAvailabilityOutput } from "../types/DescribeScheduledInstanceAvailabilityOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeScheduledInstanceAvailabilityInput";
export * from "../types/DescribeScheduledInstanceAvailabilityOutput";
export * from "../types/DescribeScheduledInstanceAvailabilityExceptionsUnion";

export class DescribeScheduledInstanceAvailabilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScheduledInstanceAvailabilityInput,
      OutputTypesUnion,
      DescribeScheduledInstanceAvailabilityOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeScheduledInstanceAvailability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScheduledInstanceAvailabilityInput,
    DescribeScheduledInstanceAvailabilityOutput,
    Blob
  >();

  constructor(readonly input: DescribeScheduledInstanceAvailabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScheduledInstanceAvailabilityInput,
    DescribeScheduledInstanceAvailabilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeScheduledInstanceAvailabilityInput,
        DescribeScheduledInstanceAvailabilityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
