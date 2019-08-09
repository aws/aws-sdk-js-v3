import { ConfirmPrivateVirtualInterfaceInput } from "./ConfirmPrivateVirtualInterfaceInput";
import { ConfirmPrivateVirtualInterfaceOutput } from "./ConfirmPrivateVirtualInterfaceOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ConfirmPrivateVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmPrivateVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmPrivateVirtualInterfaceInput
  },
  output: {
    shape: ConfirmPrivateVirtualInterfaceOutput
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
