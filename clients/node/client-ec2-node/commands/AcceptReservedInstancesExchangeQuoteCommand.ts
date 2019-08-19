import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AcceptReservedInstancesExchangeQuote } from "../model/operations/AcceptReservedInstancesExchangeQuote";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptReservedInstancesExchangeQuoteInput } from "../types/AcceptReservedInstancesExchangeQuoteInput";
import { AcceptReservedInstancesExchangeQuoteOutput } from "../types/AcceptReservedInstancesExchangeQuoteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AcceptReservedInstancesExchangeQuoteInput";
export * from "../types/AcceptReservedInstancesExchangeQuoteOutput";
export * from "../types/AcceptReservedInstancesExchangeQuoteExceptionsUnion";

export class AcceptReservedInstancesExchangeQuoteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptReservedInstancesExchangeQuoteInput,
      OutputTypesUnion,
      AcceptReservedInstancesExchangeQuoteOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AcceptReservedInstancesExchangeQuote;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptReservedInstancesExchangeQuoteInput,
    AcceptReservedInstancesExchangeQuoteOutput,
    _stream.Readable
  >();

  constructor(readonly input: AcceptReservedInstancesExchangeQuoteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptReservedInstancesExchangeQuoteInput,
    AcceptReservedInstancesExchangeQuoteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptReservedInstancesExchangeQuoteInput,
        AcceptReservedInstancesExchangeQuoteOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
