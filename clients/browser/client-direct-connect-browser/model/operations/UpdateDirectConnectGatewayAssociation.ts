import { UpdateDirectConnectGatewayAssociationInput } from "../shapes/UpdateDirectConnectGatewayAssociationInput";
import { UpdateDirectConnectGatewayAssociationOutput } from "../shapes/UpdateDirectConnectGatewayAssociationOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDirectConnectGatewayAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDirectConnectGatewayAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDirectConnectGatewayAssociationInput
  },
  output: {
    shape: UpdateDirectConnectGatewayAssociationOutput
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
