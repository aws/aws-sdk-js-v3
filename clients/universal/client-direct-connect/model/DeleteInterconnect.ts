import { DeleteInterconnectInput } from "./DeleteInterconnectInput";
import { DeleteInterconnectOutput } from "./DeleteInterconnectOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteInterconnect: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInterconnect",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteInterconnectInput
  },
  output: {
    shape: DeleteInterconnectOutput
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
