import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAccountSummary } from "../model/GetAccountSummary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountSummaryInput } from "../types/GetAccountSummaryInput";
import { GetAccountSummaryOutput } from "../types/GetAccountSummaryOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetAccountSummaryInput";
export * from "../types/GetAccountSummaryOutput";
export * from "../types/GetAccountSummaryExceptionsUnion";

export class GetAccountSummaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountSummaryInput,
      OutputTypesUnion,
      GetAccountSummaryOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetAccountSummary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountSummaryInput,
    GetAccountSummaryOutput,
    Uint8Array
  >();

  constructor(readonly input: GetAccountSummaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAccountSummaryInput, GetAccountSummaryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccountSummaryInput, GetAccountSummaryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
