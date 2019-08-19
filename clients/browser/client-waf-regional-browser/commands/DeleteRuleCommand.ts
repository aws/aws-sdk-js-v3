import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRule } from "../model/operations/DeleteRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRuleInput } from "../types/DeleteRuleInput";
import { DeleteRuleOutput } from "../types/DeleteRuleOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteRuleInput";
export * from "../types/DeleteRuleOutput";
export * from "../types/DeleteRuleExceptionsUnion";

export class DeleteRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRuleInput,
      OutputTypesUnion,
      DeleteRuleOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRuleInput,
    DeleteRuleOutput,
    Blob
  >();

  constructor(readonly input: DeleteRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRuleInput, DeleteRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRuleInput, DeleteRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
