import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutOrganizationConfigRule } from "../model/PutOrganizationConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutOrganizationConfigRuleInput } from "../types/PutOrganizationConfigRuleInput";
import { PutOrganizationConfigRuleOutput } from "../types/PutOrganizationConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutOrganizationConfigRuleInput";
export * from "../types/PutOrganizationConfigRuleOutput";
export * from "../types/PutOrganizationConfigRuleExceptionsUnion";

export class PutOrganizationConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutOrganizationConfigRuleInput,
      OutputTypesUnion,
      PutOrganizationConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutOrganizationConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutOrganizationConfigRuleInput,
    PutOrganizationConfigRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: PutOrganizationConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutOrganizationConfigRuleInput,
    PutOrganizationConfigRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutOrganizationConfigRuleInput, PutOrganizationConfigRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
