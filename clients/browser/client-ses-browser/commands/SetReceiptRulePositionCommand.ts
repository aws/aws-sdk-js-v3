import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetReceiptRulePosition } from "../model/operations/SetReceiptRulePosition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetReceiptRulePositionInput } from "../types/SetReceiptRulePositionInput";
import { SetReceiptRulePositionOutput } from "../types/SetReceiptRulePositionOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SetReceiptRulePositionInput";
export * from "../types/SetReceiptRulePositionOutput";
export * from "../types/SetReceiptRulePositionExceptionsUnion";

export class SetReceiptRulePositionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetReceiptRulePositionInput,
      OutputTypesUnion,
      SetReceiptRulePositionOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = SetReceiptRulePosition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetReceiptRulePositionInput,
    SetReceiptRulePositionOutput,
    Blob
  >();

  constructor(readonly input: SetReceiptRulePositionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetReceiptRulePositionInput,
    SetReceiptRulePositionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetReceiptRulePositionInput, SetReceiptRulePositionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
