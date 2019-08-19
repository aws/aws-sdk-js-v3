import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeHostReservationOfferings } from "../model/operations/DescribeHostReservationOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHostReservationOfferingsInput } from "../types/DescribeHostReservationOfferingsInput";
import { DescribeHostReservationOfferingsOutput } from "../types/DescribeHostReservationOfferingsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeHostReservationOfferingsInput";
export * from "../types/DescribeHostReservationOfferingsOutput";
export * from "../types/DescribeHostReservationOfferingsExceptionsUnion";

export class DescribeHostReservationOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHostReservationOfferingsInput,
      OutputTypesUnion,
      DescribeHostReservationOfferingsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeHostReservationOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHostReservationOfferingsInput,
    DescribeHostReservationOfferingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeHostReservationOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeHostReservationOfferingsInput,
    DescribeHostReservationOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeHostReservationOfferingsInput,
        DescribeHostReservationOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
