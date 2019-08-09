import { AssociateVirtualInterfaceInput } from "./AssociateVirtualInterfaceInput";
import { AssociateVirtualInterfaceOutput } from "./AssociateVirtualInterfaceOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
