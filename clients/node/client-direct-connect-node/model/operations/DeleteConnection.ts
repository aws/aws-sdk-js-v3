import { DeleteConnectionInput } from "../shapes/DeleteConnectionInput";
import { DeleteConnectionOutput } from "../shapes/DeleteConnectionOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConnectionInput
  },
  output: {
    shape: DeleteConnectionOutput
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
