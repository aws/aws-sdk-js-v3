import { DeleteInterconnectInput } from "../shapes/DeleteInterconnectInput";
import { DeleteInterconnectOutput } from "../shapes/DeleteInterconnectOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
