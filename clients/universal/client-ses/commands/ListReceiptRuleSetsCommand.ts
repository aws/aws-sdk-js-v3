import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListReceiptRuleSets } from "../model/ListReceiptRuleSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListReceiptRuleSetsInput } from "../types/ListReceiptRuleSetsInput";
import { ListReceiptRuleSetsOutput } from "../types/ListReceiptRuleSetsOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/ListReceiptRuleSetsInput";
export * from "../types/ListReceiptRuleSetsOutput";
export * from "../types/ListReceiptRuleSetsExceptionsUnion";

export class ListReceiptRuleSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListReceiptRuleSetsInput,
      OutputTypesUnion,
      ListReceiptRuleSetsOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListReceiptRuleSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListReceiptRuleSetsInput,
    ListReceiptRuleSetsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListReceiptRuleSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListReceiptRuleSetsInput,
    ListReceiptRuleSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListReceiptRuleSetsInput, ListReceiptRuleSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
