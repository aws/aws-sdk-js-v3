import { DeleteDirectConnectGatewayAssociationInput } from "./DeleteDirectConnectGatewayAssociationInput";
import { DeleteDirectConnectGatewayAssociationOutput } from "./DeleteDirectConnectGatewayAssociationOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDirectConnectGatewayAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDirectConnectGatewayAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDirectConnectGatewayAssociationInput
  },
  output: {
    shape: DeleteDirectConnectGatewayAssociationOutput
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
