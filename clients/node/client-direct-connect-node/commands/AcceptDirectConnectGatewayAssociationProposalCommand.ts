import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AcceptDirectConnectGatewayAssociationProposal } from "../model/operations/AcceptDirectConnectGatewayAssociationProposal";
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
      _stream.Readable
    > {
  readonly model = AcceptDirectConnectGatewayAssociationProposal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptDirectConnectGatewayAssociationProposalInput,
    AcceptDirectConnectGatewayAssociationProposalOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: AcceptDirectConnectGatewayAssociationProposalInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
