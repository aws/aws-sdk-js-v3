import { CreateDirectConnectGatewayAssociationProposalInput } from "./CreateDirectConnectGatewayAssociationProposalInput";
import { CreateDirectConnectGatewayAssociationProposalOutput } from "./CreateDirectConnectGatewayAssociationProposalOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDirectConnectGatewayAssociationProposal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDirectConnectGatewayAssociationProposal",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDirectConnectGatewayAssociationProposalInput
  },
  output: {
    shape: CreateDirectConnectGatewayAssociationProposalOutput
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
