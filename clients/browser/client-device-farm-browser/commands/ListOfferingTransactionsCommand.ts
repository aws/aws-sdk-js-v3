import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOfferingTransactions } from "../model/ListOfferingTransactions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOfferingTransactionsInput } from "../types/ListOfferingTransactionsInput";
import { ListOfferingTransactionsOutput } from "../types/ListOfferingTransactionsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListOfferingTransactionsInput";
export * from "../types/ListOfferingTransactionsOutput";
export * from "../types/ListOfferingTransactionsExceptionsUnion";

export class ListOfferingTransactionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOfferingTransactionsInput,
      OutputTypesUnion,
      ListOfferingTransactionsOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListOfferingTransactions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOfferingTransactionsInput,
    ListOfferingTransactionsOutput,
    Blob
  >();

  constructor(readonly input: ListOfferingTransactionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOfferingTransactionsInput,
    ListOfferingTransactionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOfferingTransactionsInput, ListOfferingTransactionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
