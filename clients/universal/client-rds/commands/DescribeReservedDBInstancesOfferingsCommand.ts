import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReservedDBInstancesOfferings } from "../model/DescribeReservedDBInstancesOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedDBInstancesOfferingsInput } from "../types/DescribeReservedDBInstancesOfferingsInput";
import { DescribeReservedDBInstancesOfferingsOutput } from "../types/DescribeReservedDBInstancesOfferingsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeReservedDBInstancesOfferingsInput";
export * from "../types/DescribeReservedDBInstancesOfferingsOutput";
export * from "../types/DescribeReservedDBInstancesOfferingsExceptionsUnion";

export class DescribeReservedDBInstancesOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedDBInstancesOfferingsInput,
      OutputTypesUnion,
      DescribeReservedDBInstancesOfferingsOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeReservedDBInstancesOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedDBInstancesOfferingsInput,
    DescribeReservedDBInstancesOfferingsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeReservedDBInstancesOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedDBInstancesOfferingsInput,
    DescribeReservedDBInstancesOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedDBInstancesOfferingsInput,
        DescribeReservedDBInstancesOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
