import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRuleGroup } from "../model/operations/DeleteRuleGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRuleGroupInput } from "../types/DeleteRuleGroupInput";
import { DeleteRuleGroupOutput } from "../types/DeleteRuleGroupOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteRuleGroupInput";
export * from "../types/DeleteRuleGroupOutput";
export * from "../types/DeleteRuleGroupExceptionsUnion";

export class DeleteRuleGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRuleGroupInput,
      OutputTypesUnion,
      DeleteRuleGroupOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRuleGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRuleGroupInput,
    DeleteRuleGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteRuleGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRuleGroupInput, DeleteRuleGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRuleGroupInput, DeleteRuleGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
