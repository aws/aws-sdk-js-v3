import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteReceiptRule } from "../model/DeleteReceiptRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReceiptRuleInput } from "../types/DeleteReceiptRuleInput";
import { DeleteReceiptRuleOutput } from "../types/DeleteReceiptRuleOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteReceiptRuleInput";
export * from "../types/DeleteReceiptRuleOutput";
export * from "../types/DeleteReceiptRuleExceptionsUnion";

export class DeleteReceiptRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReceiptRuleInput,
      OutputTypesUnion,
      DeleteReceiptRuleOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteReceiptRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReceiptRuleInput,
    DeleteReceiptRuleOutput,
    Blob
  >();

  constructor(readonly input: DeleteReceiptRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteReceiptRuleInput, DeleteReceiptRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReceiptRuleInput, DeleteReceiptRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
