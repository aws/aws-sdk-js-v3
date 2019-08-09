import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReservedNodeOfferings } from "../model/DescribeReservedNodeOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedNodeOfferingsInput } from "../types/DescribeReservedNodeOfferingsInput";
import { DescribeReservedNodeOfferingsOutput } from "../types/DescribeReservedNodeOfferingsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeReservedNodeOfferingsInput";
export * from "../types/DescribeReservedNodeOfferingsOutput";
export * from "../types/DescribeReservedNodeOfferingsExceptionsUnion";

export class DescribeReservedNodeOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedNodeOfferingsInput,
      OutputTypesUnion,
      DescribeReservedNodeOfferingsOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeReservedNodeOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedNodeOfferingsInput,
    DescribeReservedNodeOfferingsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeReservedNodeOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedNodeOfferingsInput,
    DescribeReservedNodeOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedNodeOfferingsInput,
        DescribeReservedNodeOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
