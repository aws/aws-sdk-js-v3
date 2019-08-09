import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSecurityGroupRuleDescriptionsEgress } from "../model/UpdateSecurityGroupRuleDescriptionsEgress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSecurityGroupRuleDescriptionsEgressInput } from "../types/UpdateSecurityGroupRuleDescriptionsEgressInput";
import { UpdateSecurityGroupRuleDescriptionsEgressOutput } from "../types/UpdateSecurityGroupRuleDescriptionsEgressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/UpdateSecurityGroupRuleDescriptionsEgressInput";
export * from "../types/UpdateSecurityGroupRuleDescriptionsEgressOutput";
export * from "../types/UpdateSecurityGroupRuleDescriptionsEgressExceptionsUnion";

export class UpdateSecurityGroupRuleDescriptionsEgressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSecurityGroupRuleDescriptionsEgressInput,
      OutputTypesUnion,
      UpdateSecurityGroupRuleDescriptionsEgressOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateSecurityGroupRuleDescriptionsEgress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSecurityGroupRuleDescriptionsEgressInput,
    UpdateSecurityGroupRuleDescriptionsEgressOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateSecurityGroupRuleDescriptionsEgressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSecurityGroupRuleDescriptionsEgressInput,
    UpdateSecurityGroupRuleDescriptionsEgressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateSecurityGroupRuleDescriptionsEgressInput,
        UpdateSecurityGroupRuleDescriptionsEgressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
