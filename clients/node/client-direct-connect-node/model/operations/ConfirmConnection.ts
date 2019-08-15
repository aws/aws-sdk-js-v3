import { ConfirmConnectionInput } from "../shapes/ConfirmConnectionInput";
import { ConfirmConnectionOutput } from "../shapes/ConfirmConnectionOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ConfirmConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmConnectionInput
  },
  output: {
    shape: ConfirmConnectionOutput
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
