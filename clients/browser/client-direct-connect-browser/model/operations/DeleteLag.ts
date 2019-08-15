import { DeleteLagInput } from "../shapes/DeleteLagInput";
import { DeleteLagOutput } from "../shapes/DeleteLagOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLag: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLag",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLagInput
  },
  output: {
    shape: DeleteLagOutput
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
