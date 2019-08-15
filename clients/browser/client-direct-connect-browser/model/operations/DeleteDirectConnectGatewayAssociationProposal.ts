import { DeleteDirectConnectGatewayAssociationProposalInput } from "../shapes/DeleteDirectConnectGatewayAssociationProposalInput";
import { DeleteDirectConnectGatewayAssociationProposalOutput } from "../shapes/DeleteDirectConnectGatewayAssociationProposalOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDirectConnectGatewayAssociationProposal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDirectConnectGatewayAssociationProposal",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDirectConnectGatewayAssociationProposalInput
  },
  output: {
    shape: DeleteDirectConnectGatewayAssociationProposalOutput
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
