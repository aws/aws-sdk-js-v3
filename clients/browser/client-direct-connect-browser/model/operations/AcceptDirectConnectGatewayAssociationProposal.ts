import { AcceptDirectConnectGatewayAssociationProposalInput } from "../shapes/AcceptDirectConnectGatewayAssociationProposalInput";
import { AcceptDirectConnectGatewayAssociationProposalOutput } from "../shapes/AcceptDirectConnectGatewayAssociationProposalOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
