import { UpdateVirtualInterfaceAttributesInput } from "../shapes/UpdateVirtualInterfaceAttributesInput";
import { UpdateVirtualInterfaceAttributesOutput } from "../shapes/UpdateVirtualInterfaceAttributesOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateVirtualInterfaceAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVirtualInterfaceAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateVirtualInterfaceAttributesInput
  },
  output: {
    shape: UpdateVirtualInterfaceAttributesOutput
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
