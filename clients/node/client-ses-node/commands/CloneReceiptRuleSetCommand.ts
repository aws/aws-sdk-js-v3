import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CloneReceiptRuleSet } from "../model/operations/CloneReceiptRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CloneReceiptRuleSetInput } from "../types/CloneReceiptRuleSetInput";
import { CloneReceiptRuleSetOutput } from "../types/CloneReceiptRuleSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CloneReceiptRuleSetInput";
export * from "../types/CloneReceiptRuleSetOutput";
export * from "../types/CloneReceiptRuleSetExceptionsUnion";

export class CloneReceiptRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CloneReceiptRuleSetInput,
      OutputTypesUnion,
      CloneReceiptRuleSetOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CloneReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CloneReceiptRuleSetInput,
    CloneReceiptRuleSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CloneReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CloneReceiptRuleSetInput,
    CloneReceiptRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CloneReceiptRuleSetInput, CloneReceiptRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
