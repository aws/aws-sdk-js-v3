import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAvailabilityZones } from "../model/DescribeAvailabilityZones";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAvailabilityZonesInput } from "../types/DescribeAvailabilityZonesInput";
import { DescribeAvailabilityZonesOutput } from "../types/DescribeAvailabilityZonesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeAvailabilityZonesInput";
export * from "../types/DescribeAvailabilityZonesOutput";
export * from "../types/DescribeAvailabilityZonesExceptionsUnion";

export class DescribeAvailabilityZonesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAvailabilityZonesInput,
      OutputTypesUnion,
      DescribeAvailabilityZonesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeAvailabilityZones;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAvailabilityZonesInput,
    DescribeAvailabilityZonesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAvailabilityZonesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAvailabilityZonesInput,
    DescribeAvailabilityZonesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAvailabilityZonesInput, DescribeAvailabilityZonesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
