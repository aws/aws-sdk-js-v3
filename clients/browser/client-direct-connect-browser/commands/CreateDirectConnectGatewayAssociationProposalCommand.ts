import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDirectConnectGatewayAssociationProposal } from "../model/operations/CreateDirectConnectGatewayAssociationProposal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDirectConnectGatewayAssociationProposalInput } from "../types/CreateDirectConnectGatewayAssociationProposalInput";
import { CreateDirectConnectGatewayAssociationProposalOutput } from "../types/CreateDirectConnectGatewayAssociationProposalOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreateDirectConnectGatewayAssociationProposalInput";
export * from "../types/CreateDirectConnectGatewayAssociationProposalOutput";
export * from "../types/CreateDirectConnectGatewayAssociationProposalExceptionsUnion";

export class CreateDirectConnectGatewayAssociationProposalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDirectConnectGatewayAssociationProposalInput,
      OutputTypesUnion,
      CreateDirectConnectGatewayAssociationProposalOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDirectConnectGatewayAssociationProposal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDirectConnectGatewayAssociationProposalInput,
    CreateDirectConnectGatewayAssociationProposalOutput,
    Blob
  >();

  constructor(
    readonly input: CreateDirectConnectGatewayAssociationProposalInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDirectConnectGatewayAssociationProposalInput,
    CreateDirectConnectGatewayAssociationProposalOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDirectConnectGatewayAssociationProposalInput,
        CreateDirectConnectGatewayAssociationProposalOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
