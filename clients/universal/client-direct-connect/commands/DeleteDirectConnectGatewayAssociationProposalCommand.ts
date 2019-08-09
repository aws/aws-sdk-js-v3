import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDirectConnectGatewayAssociationProposal } from "../model/DeleteDirectConnectGatewayAssociationProposal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDirectConnectGatewayAssociationProposalInput } from "../types/DeleteDirectConnectGatewayAssociationProposalInput";
import { DeleteDirectConnectGatewayAssociationProposalOutput } from "../types/DeleteDirectConnectGatewayAssociationProposalOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteDirectConnectGatewayAssociationProposalInput";
export * from "../types/DeleteDirectConnectGatewayAssociationProposalOutput";
export * from "../types/DeleteDirectConnectGatewayAssociationProposalExceptionsUnion";

export class DeleteDirectConnectGatewayAssociationProposalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDirectConnectGatewayAssociationProposalInput,
      OutputTypesUnion,
      DeleteDirectConnectGatewayAssociationProposalOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDirectConnectGatewayAssociationProposal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDirectConnectGatewayAssociationProposalInput,
    DeleteDirectConnectGatewayAssociationProposalOutput,
    Uint8Array
  >();

  constructor(
    readonly input: DeleteDirectConnectGatewayAssociationProposalInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDirectConnectGatewayAssociationProposalInput,
    DeleteDirectConnectGatewayAssociationProposalOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDirectConnectGatewayAssociationProposalInput,
        DeleteDirectConnectGatewayAssociationProposalOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
