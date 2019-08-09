import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRuleGroup } from "../model/UpdateRuleGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRuleGroupInput } from "../types/UpdateRuleGroupInput";
import { UpdateRuleGroupOutput } from "../types/UpdateRuleGroupOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/UpdateRuleGroupInput";
export * from "../types/UpdateRuleGroupOutput";
export * from "../types/UpdateRuleGroupExceptionsUnion";

export class UpdateRuleGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRuleGroupInput,
      OutputTypesUnion,
      UpdateRuleGroupOutput,
      WAFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateRuleGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRuleGroupInput,
    UpdateRuleGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateRuleGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRuleGroupInput, UpdateRuleGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRuleGroupInput, UpdateRuleGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
