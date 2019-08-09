import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteOrganizationConfigRule } from "../model/DeleteOrganizationConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteOrganizationConfigRuleInput } from "../types/DeleteOrganizationConfigRuleInput";
import { DeleteOrganizationConfigRuleOutput } from "../types/DeleteOrganizationConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteOrganizationConfigRuleInput";
export * from "../types/DeleteOrganizationConfigRuleOutput";
export * from "../types/DeleteOrganizationConfigRuleExceptionsUnion";

export class DeleteOrganizationConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteOrganizationConfigRuleInput,
      OutputTypesUnion,
      DeleteOrganizationConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteOrganizationConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOrganizationConfigRuleInput,
    DeleteOrganizationConfigRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteOrganizationConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteOrganizationConfigRuleInput,
    DeleteOrganizationConfigRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteOrganizationConfigRuleInput,
        DeleteOrganizationConfigRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
