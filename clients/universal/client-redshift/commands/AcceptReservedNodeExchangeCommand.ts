import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptReservedNodeExchange } from "../model/AcceptReservedNodeExchange";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptReservedNodeExchangeInput } from "../types/AcceptReservedNodeExchangeInput";
import { AcceptReservedNodeExchangeOutput } from "../types/AcceptReservedNodeExchangeOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/AcceptReservedNodeExchangeInput";
export * from "../types/AcceptReservedNodeExchangeOutput";
export * from "../types/AcceptReservedNodeExchangeExceptionsUnion";

export class AcceptReservedNodeExchangeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptReservedNodeExchangeInput,
      OutputTypesUnion,
      AcceptReservedNodeExchangeOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AcceptReservedNodeExchange;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptReservedNodeExchangeInput,
    AcceptReservedNodeExchangeOutput,
    Uint8Array
  >();

  constructor(readonly input: AcceptReservedNodeExchangeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptReservedNodeExchangeInput,
    AcceptReservedNodeExchangeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptReservedNodeExchangeInput,
        AcceptReservedNodeExchangeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
