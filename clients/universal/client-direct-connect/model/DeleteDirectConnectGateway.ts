import { DeleteDirectConnectGatewayInput } from "./DeleteDirectConnectGatewayInput";
import { DeleteDirectConnectGatewayOutput } from "./DeleteDirectConnectGatewayOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
