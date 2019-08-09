import { CreateDirectConnectGatewayAssociationInput } from "./CreateDirectConnectGatewayAssociationInput";
import { CreateDirectConnectGatewayAssociationOutput } from "./CreateDirectConnectGatewayAssociationOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDirectConnectGatewayAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDirectConnectGatewayAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDirectConnectGatewayAssociationInput
  },
  output: {
    shape: CreateDirectConnectGatewayAssociationOutput
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
