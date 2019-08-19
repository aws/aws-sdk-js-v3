import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateClientVpnTargetNetwork } from "../model/operations/DisassociateClientVpnTargetNetwork";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateClientVpnTargetNetworkInput } from "../types/DisassociateClientVpnTargetNetworkInput";
import { DisassociateClientVpnTargetNetworkOutput } from "../types/DisassociateClientVpnTargetNetworkOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisassociateClientVpnTargetNetworkInput";
export * from "../types/DisassociateClientVpnTargetNetworkOutput";
export * from "../types/DisassociateClientVpnTargetNetworkExceptionsUnion";

export class DisassociateClientVpnTargetNetworkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateClientVpnTargetNetworkInput,
      OutputTypesUnion,
      DisassociateClientVpnTargetNetworkOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateClientVpnTargetNetwork;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateClientVpnTargetNetworkInput,
    DisassociateClientVpnTargetNetworkOutput,
    Blob
  >();

  constructor(readonly input: DisassociateClientVpnTargetNetworkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateClientVpnTargetNetworkInput,
    DisassociateClientVpnTargetNetworkOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateClientVpnTargetNetworkInput,
        DisassociateClientVpnTargetNetworkOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
