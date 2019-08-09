import { DeleteLagInput } from "./DeleteLagInput";
import { DeleteLagOutput } from "./DeleteLagOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
