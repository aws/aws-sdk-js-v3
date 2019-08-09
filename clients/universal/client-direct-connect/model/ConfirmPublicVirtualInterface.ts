import { ConfirmPublicVirtualInterfaceInput } from "./ConfirmPublicVirtualInterfaceInput";
import { ConfirmPublicVirtualInterfaceOutput } from "./ConfirmPublicVirtualInterfaceOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ConfirmPublicVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmPublicVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmPublicVirtualInterfaceInput
  },
  output: {
    shape: ConfirmPublicVirtualInterfaceOutput
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
