import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ApplySecurityGroupsToClientVpnTargetNetwork } from "../model/operations/ApplySecurityGroupsToClientVpnTargetNetwork";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApplySecurityGroupsToClientVpnTargetNetworkInput } from "../types/ApplySecurityGroupsToClientVpnTargetNetworkInput";
import { ApplySecurityGroupsToClientVpnTargetNetworkOutput } from "../types/ApplySecurityGroupsToClientVpnTargetNetworkOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ApplySecurityGroupsToClientVpnTargetNetworkInput";
export * from "../types/ApplySecurityGroupsToClientVpnTargetNetworkOutput";
export * from "../types/ApplySecurityGroupsToClientVpnTargetNetworkExceptionsUnion";

export class ApplySecurityGroupsToClientVpnTargetNetworkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ApplySecurityGroupsToClientVpnTargetNetworkInput,
      OutputTypesUnion,
      ApplySecurityGroupsToClientVpnTargetNetworkOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ApplySecurityGroupsToClientVpnTargetNetwork;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApplySecurityGroupsToClientVpnTargetNetworkInput,
    ApplySecurityGroupsToClientVpnTargetNetworkOutput,
    Blob
  >();

  constructor(
    readonly input: ApplySecurityGroupsToClientVpnTargetNetworkInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ApplySecurityGroupsToClientVpnTargetNetworkInput,
    ApplySecurityGroupsToClientVpnTargetNetworkOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ApplySecurityGroupsToClientVpnTargetNetworkInput,
        ApplySecurityGroupsToClientVpnTargetNetworkOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
