import { AssociateVirtualInterfaceInput } from "../shapes/AssociateVirtualInterfaceInput";
import { AssociateVirtualInterfaceOutput } from "../shapes/AssociateVirtualInterfaceOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateVirtualInterfaceInput
  },
  output: {
    shape: AssociateVirtualInterfaceOutput
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
