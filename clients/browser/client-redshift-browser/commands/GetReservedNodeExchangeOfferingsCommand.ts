import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetReservedNodeExchangeOfferings } from "../model/GetReservedNodeExchangeOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReservedNodeExchangeOfferingsInput } from "../types/GetReservedNodeExchangeOfferingsInput";
import { GetReservedNodeExchangeOfferingsOutput } from "../types/GetReservedNodeExchangeOfferingsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/GetReservedNodeExchangeOfferingsInput";
export * from "../types/GetReservedNodeExchangeOfferingsOutput";
export * from "../types/GetReservedNodeExchangeOfferingsExceptionsUnion";

export class GetReservedNodeExchangeOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReservedNodeExchangeOfferingsInput,
      OutputTypesUnion,
      GetReservedNodeExchangeOfferingsOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = GetReservedNodeExchangeOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReservedNodeExchangeOfferingsInput,
    GetReservedNodeExchangeOfferingsOutput,
    Blob
  >();

  constructor(readonly input: GetReservedNodeExchangeOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReservedNodeExchangeOfferingsInput,
    GetReservedNodeExchangeOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetReservedNodeExchangeOfferingsInput,
        GetReservedNodeExchangeOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
