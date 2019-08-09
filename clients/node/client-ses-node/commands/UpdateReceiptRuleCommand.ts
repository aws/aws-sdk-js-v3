import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateReceiptRule } from "../model/UpdateReceiptRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateReceiptRuleInput } from "../types/UpdateReceiptRuleInput";
import { UpdateReceiptRuleOutput } from "../types/UpdateReceiptRuleOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/UpdateReceiptRuleInput";
export * from "../types/UpdateReceiptRuleOutput";
export * from "../types/UpdateReceiptRuleExceptionsUnion";

export class UpdateReceiptRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateReceiptRuleInput,
      OutputTypesUnion,
      UpdateReceiptRuleOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateReceiptRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateReceiptRuleInput,
    UpdateReceiptRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateReceiptRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateReceiptRuleInput, UpdateReceiptRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateReceiptRuleInput, UpdateReceiptRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
