import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReservedInstancesListings } from "../model/DescribeReservedInstancesListings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedInstancesListingsInput } from "../types/DescribeReservedInstancesListingsInput";
import { DescribeReservedInstancesListingsOutput } from "../types/DescribeReservedInstancesListingsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeReservedInstancesListingsInput";
export * from "../types/DescribeReservedInstancesListingsOutput";
export * from "../types/DescribeReservedInstancesListingsExceptionsUnion";

export class DescribeReservedInstancesListingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedInstancesListingsInput,
      OutputTypesUnion,
      DescribeReservedInstancesListingsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeReservedInstancesListings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedInstancesListingsInput,
    DescribeReservedInstancesListingsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeReservedInstancesListingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedInstancesListingsInput,
    DescribeReservedInstancesListingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedInstancesListingsInput,
        DescribeReservedInstancesListingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
