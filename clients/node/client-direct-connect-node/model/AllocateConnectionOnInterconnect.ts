import { AllocateConnectionOnInterconnectInput } from "./AllocateConnectionOnInterconnectInput";
import { AllocateConnectionOnInterconnectOutput } from "./AllocateConnectionOnInterconnectOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AllocateConnectionOnInterconnect: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AllocateConnectionOnInterconnect",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AllocateConnectionOnInterconnectInput
  },
  output: {
    shape: AllocateConnectionOnInterconnectOutput
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
