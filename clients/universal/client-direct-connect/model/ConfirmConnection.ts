import { ConfirmConnectionInput } from "./ConfirmConnectionInput";
import { ConfirmConnectionOutput } from "./ConfirmConnectionOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
