import { DeleteDirectConnectGatewayAssociationInput } from "../shapes/DeleteDirectConnectGatewayAssociationInput";
import { DeleteDirectConnectGatewayAssociationOutput } from "../shapes/DeleteDirectConnectGatewayAssociationOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
