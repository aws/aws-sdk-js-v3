import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateReceiptRule } from "../model/operations/CreateReceiptRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReceiptRuleInput } from "../types/CreateReceiptRuleInput";
import { CreateReceiptRuleOutput } from "../types/CreateReceiptRuleOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateReceiptRuleInput";
export * from "../types/CreateReceiptRuleOutput";
export * from "../types/CreateReceiptRuleExceptionsUnion";

export class CreateReceiptRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReceiptRuleInput,
      OutputTypesUnion,
      CreateReceiptRuleOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateReceiptRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReceiptRuleInput,
    CreateReceiptRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateReceiptRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateReceiptRuleInput, CreateReceiptRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateReceiptRuleInput, CreateReceiptRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
