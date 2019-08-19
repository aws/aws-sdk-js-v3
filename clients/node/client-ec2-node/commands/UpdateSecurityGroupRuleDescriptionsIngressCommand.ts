import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSecurityGroupRuleDescriptionsIngress } from "../model/operations/UpdateSecurityGroupRuleDescriptionsIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSecurityGroupRuleDescriptionsIngressInput } from "../types/UpdateSecurityGroupRuleDescriptionsIngressInput";
import { UpdateSecurityGroupRuleDescriptionsIngressOutput } from "../types/UpdateSecurityGroupRuleDescriptionsIngressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/UpdateSecurityGroupRuleDescriptionsIngressInput";
export * from "../types/UpdateSecurityGroupRuleDescriptionsIngressOutput";
export * from "../types/UpdateSecurityGroupRuleDescriptionsIngressExceptionsUnion";

export class UpdateSecurityGroupRuleDescriptionsIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSecurityGroupRuleDescriptionsIngressInput,
      OutputTypesUnion,
      UpdateSecurityGroupRuleDescriptionsIngressOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSecurityGroupRuleDescriptionsIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSecurityGroupRuleDescriptionsIngressInput,
    UpdateSecurityGroupRuleDescriptionsIngressOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: UpdateSecurityGroupRuleDescriptionsIngressInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSecurityGroupRuleDescriptionsIngressInput,
    UpdateSecurityGroupRuleDescriptionsIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateSecurityGroupRuleDescriptionsIngressInput,
        UpdateSecurityGroupRuleDescriptionsIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
