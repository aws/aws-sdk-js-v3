import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteReceiptRuleSet } from "../model/DeleteReceiptRuleSet";
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
      _stream.Readable
    > {
  readonly model = DeleteReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReceiptRuleSetInput,
    DeleteReceiptRuleSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
