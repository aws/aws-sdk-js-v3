import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClientVpnTargetNetworks } from "../model/DescribeClientVpnTargetNetworks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClientVpnTargetNetworksInput } from "../types/DescribeClientVpnTargetNetworksInput";
import { DescribeClientVpnTargetNetworksOutput } from "../types/DescribeClientVpnTargetNetworksOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeClientVpnTargetNetworksInput";
export * from "../types/DescribeClientVpnTargetNetworksOutput";
export * from "../types/DescribeClientVpnTargetNetworksExceptionsUnion";

export class DescribeClientVpnTargetNetworksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClientVpnTargetNetworksInput,
      OutputTypesUnion,
      DescribeClientVpnTargetNetworksOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeClientVpnTargetNetworks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClientVpnTargetNetworksInput,
    DescribeClientVpnTargetNetworksOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeClientVpnTargetNetworksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClientVpnTargetNetworksInput,
    DescribeClientVpnTargetNetworksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClientVpnTargetNetworksInput,
        DescribeClientVpnTargetNetworksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
