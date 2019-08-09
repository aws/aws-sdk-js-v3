import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAccountBalance } from "../model/GetAccountBalance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountBalanceInput } from "../types/GetAccountBalanceInput";
import { GetAccountBalanceOutput } from "../types/GetAccountBalanceOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/GetAccountBalanceInput";
export * from "../types/GetAccountBalanceOutput";
export * from "../types/GetAccountBalanceExceptionsUnion";

export class GetAccountBalanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountBalanceInput,
      OutputTypesUnion,
      GetAccountBalanceOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAccountBalance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountBalanceInput,
    GetAccountBalanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAccountBalanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAccountBalanceInput, GetAccountBalanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccountBalanceInput, GetAccountBalanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
