import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBonusPayments } from "../model/ListBonusPayments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBonusPaymentsInput } from "../types/ListBonusPaymentsInput";
import { ListBonusPaymentsOutput } from "../types/ListBonusPaymentsOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListBonusPaymentsInput";
export * from "../types/ListBonusPaymentsOutput";
export * from "../types/ListBonusPaymentsExceptionsUnion";

export class ListBonusPaymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBonusPaymentsInput,
      OutputTypesUnion,
      ListBonusPaymentsOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = ListBonusPayments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBonusPaymentsInput,
    ListBonusPaymentsOutput,
    Blob
  >();

  constructor(readonly input: ListBonusPaymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBonusPaymentsInput, ListBonusPaymentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBonusPaymentsInput, ListBonusPaymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
