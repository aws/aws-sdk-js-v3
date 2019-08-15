import { DeleteVirtualInterfaceInput } from "../shapes/DeleteVirtualInterfaceInput";
import { DeleteVirtualInterfaceOutput } from "../shapes/DeleteVirtualInterfaceOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVirtualInterfaceInput
  },
  output: {
    shape: DeleteVirtualInterfaceOutput
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
