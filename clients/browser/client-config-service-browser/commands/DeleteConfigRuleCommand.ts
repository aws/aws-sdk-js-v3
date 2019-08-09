import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfigRule } from "../model/DeleteConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigRuleInput } from "../types/DeleteConfigRuleInput";
import { DeleteConfigRuleOutput } from "../types/DeleteConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteConfigRuleInput";
export * from "../types/DeleteConfigRuleOutput";
export * from "../types/DeleteConfigRuleExceptionsUnion";

export class DeleteConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigRuleInput,
      OutputTypesUnion,
      DeleteConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigRuleInput,
    DeleteConfigRuleOutput,
    Blob
  >();

  constructor(readonly input: DeleteConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteConfigRuleInput, DeleteConfigRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteConfigRuleInput, DeleteConfigRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
