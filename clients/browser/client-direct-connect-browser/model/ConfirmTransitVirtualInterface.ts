import { ConfirmTransitVirtualInterfaceInput } from "./ConfirmTransitVirtualInterfaceInput";
import { ConfirmTransitVirtualInterfaceOutput } from "./ConfirmTransitVirtualInterfaceOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ConfirmTransitVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmTransitVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmTransitVirtualInterfaceInput
  },
  output: {
    shape: ConfirmTransitVirtualInterfaceOutput
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
