import { CreateDirectConnectGatewayInput } from "../shapes/CreateDirectConnectGatewayInput";
import { CreateDirectConnectGatewayOutput } from "../shapes/CreateDirectConnectGatewayOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDirectConnectGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDirectConnectGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDirectConnectGatewayInput
  },
  output: {
    shape: CreateDirectConnectGatewayOutput
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
