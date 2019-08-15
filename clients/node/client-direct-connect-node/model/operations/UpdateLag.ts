import { UpdateLagInput } from "../shapes/UpdateLagInput";
import { UpdateLagOutput } from "../shapes/UpdateLagOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateLag: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateLag",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateLagInput
  },
  output: {
    shape: UpdateLagOutput
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
