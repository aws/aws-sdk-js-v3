import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptDirectConnectGatewayAssociationProposal } from "../model/AcceptDirectConnectGatewayAssociationProposal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptDirectConnectGatewayAssociationProposalInput } from "../types/AcceptDirectConnectGatewayAssociationProposalInput";
import { AcceptDirectConnectGatewayAssociationProposalOutput } from "../types/AcceptDirectConnectGatewayAssociationProposalOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AcceptDirectConnectGatewayAssociationProposalInput";
export * from "../types/AcceptDirectConnectGatewayAssociationProposalOutput";
export * from "../types/AcceptDirectConnectGatewayAssociationProposalExceptionsUnion";

export class AcceptDirectConnectGatewayAssociationProposalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptDirectConnectGatewayAssociationProposalInput,
      OutputTypesUnion,
      AcceptDirectConnectGatewayAssociationProposalOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AcceptDirectConnectGatewayAssociationProposal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptDirectConnectGatewayAssociationProposalInput,
    AcceptDirectConnectGatewayAssociationProposalOutput,
    Uint8Array
  >();

  constructor(
    readonly input: AcceptDirectConnectGatewayAssociationProposalInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptDirectConnectGatewayAssociationProposalInput,
    AcceptDirectConnectGatewayAssociationProposalOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptDirectConnectGatewayAssociationProposalInput,
        AcceptDirectConnectGatewayAssociationProposalOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
