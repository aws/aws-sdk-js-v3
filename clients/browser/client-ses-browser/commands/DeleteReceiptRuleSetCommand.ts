import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteReceiptRuleSet } from "../model/operations/DeleteReceiptRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReceiptRuleSetInput } from "../types/DeleteReceiptRuleSetInput";
import { DeleteReceiptRuleSetOutput } from "../types/DeleteReceiptRuleSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteReceiptRuleSetInput";
export * from "../types/DeleteReceiptRuleSetOutput";
export * from "../types/DeleteReceiptRuleSetExceptionsUnion";

export class DeleteReceiptRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReceiptRuleSetInput,
      OutputTypesUnion,
      DeleteReceiptRuleSetOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReceiptRuleSetInput,
    DeleteReceiptRuleSetOutput,
    Blob
  >();

  constructor(readonly input: DeleteReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReceiptRuleSetInput,
    DeleteReceiptRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReceiptRuleSetInput, DeleteReceiptRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
