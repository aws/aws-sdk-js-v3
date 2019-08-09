import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateReceiptRuleSet } from "../model/CreateReceiptRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReceiptRuleSetInput } from "../types/CreateReceiptRuleSetInput";
import { CreateReceiptRuleSetOutput } from "../types/CreateReceiptRuleSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateReceiptRuleSetInput";
export * from "../types/CreateReceiptRuleSetOutput";
export * from "../types/CreateReceiptRuleSetExceptionsUnion";

export class CreateReceiptRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReceiptRuleSetInput,
      OutputTypesUnion,
      CreateReceiptRuleSetOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = CreateReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReceiptRuleSetInput,
    CreateReceiptRuleSetOutput,
    Blob
  >();

  constructor(readonly input: CreateReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReceiptRuleSetInput,
    CreateReceiptRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateReceiptRuleSetInput, CreateReceiptRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
