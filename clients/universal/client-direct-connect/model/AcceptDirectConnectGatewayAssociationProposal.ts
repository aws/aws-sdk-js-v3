import { AcceptDirectConnectGatewayAssociationProposalInput } from "./AcceptDirectConnectGatewayAssociationProposalInput";
import { AcceptDirectConnectGatewayAssociationProposalOutput } from "./AcceptDirectConnectGatewayAssociationProposalOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptDirectConnectGatewayAssociationProposal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptDirectConnectGatewayAssociationProposal",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptDirectConnectGatewayAssociationProposalInput
  },
  output: {
    shape: AcceptDirectConnectGatewayAssociationProposalOutput
  },
  errors: [
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
