import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservedInstancesOfferings } from "../model/operations/DescribeReservedInstancesOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedInstancesOfferingsInput } from "../types/DescribeReservedInstancesOfferingsInput";
import { DescribeReservedInstancesOfferingsOutput } from "../types/DescribeReservedInstancesOfferingsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeReservedInstancesOfferingsInput";
export * from "../types/DescribeReservedInstancesOfferingsOutput";
export * from "../types/DescribeReservedInstancesOfferingsExceptionsUnion";

export class DescribeReservedInstancesOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedInstancesOfferingsInput,
      OutputTypesUnion,
      DescribeReservedInstancesOfferingsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservedInstancesOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedInstancesOfferingsInput,
    DescribeReservedInstancesOfferingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservedInstancesOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedInstancesOfferingsInput,
    DescribeReservedInstancesOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedInstancesOfferingsInput,
        DescribeReservedInstancesOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
