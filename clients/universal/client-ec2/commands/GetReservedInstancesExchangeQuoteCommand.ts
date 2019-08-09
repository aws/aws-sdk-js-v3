import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetReservedInstancesExchangeQuote } from "../model/GetReservedInstancesExchangeQuote";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReservedInstancesExchangeQuoteInput } from "../types/GetReservedInstancesExchangeQuoteInput";
import { GetReservedInstancesExchangeQuoteOutput } from "../types/GetReservedInstancesExchangeQuoteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetReservedInstancesExchangeQuoteInput";
export * from "../types/GetReservedInstancesExchangeQuoteOutput";
export * from "../types/GetReservedInstancesExchangeQuoteExceptionsUnion";

export class GetReservedInstancesExchangeQuoteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReservedInstancesExchangeQuoteInput,
      OutputTypesUnion,
      GetReservedInstancesExchangeQuoteOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetReservedInstancesExchangeQuote;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReservedInstancesExchangeQuoteInput,
    GetReservedInstancesExchangeQuoteOutput,
    Uint8Array
  >();

  constructor(readonly input: GetReservedInstancesExchangeQuoteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReservedInstancesExchangeQuoteInput,
    GetReservedInstancesExchangeQuoteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetReservedInstancesExchangeQuoteInput,
        GetReservedInstancesExchangeQuoteOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
