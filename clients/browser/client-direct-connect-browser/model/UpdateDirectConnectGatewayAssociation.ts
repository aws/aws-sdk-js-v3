import { UpdateDirectConnectGatewayAssociationInput } from "./UpdateDirectConnectGatewayAssociationInput";
import { UpdateDirectConnectGatewayAssociationOutput } from "./UpdateDirectConnectGatewayAssociationOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
