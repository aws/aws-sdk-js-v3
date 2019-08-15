import { DeleteDirectConnectGatewayInput } from "../shapes/DeleteDirectConnectGatewayInput";
import { DeleteDirectConnectGatewayOutput } from "../shapes/DeleteDirectConnectGatewayOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDirectConnectGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDirectConnectGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDirectConnectGatewayInput
  },
  output: {
    shape: DeleteDirectConnectGatewayOutput
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
