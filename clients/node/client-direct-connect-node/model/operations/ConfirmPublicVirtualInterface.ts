import { ConfirmPublicVirtualInterfaceInput } from "../shapes/ConfirmPublicVirtualInterfaceInput";
import { ConfirmPublicVirtualInterfaceOutput } from "../shapes/ConfirmPublicVirtualInterfaceOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
