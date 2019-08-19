import { DeleteNetworkInterfaceInput } from "../shapes/DeleteNetworkInterfaceInput";
import { DeleteNetworkInterfaceOutput } from "../shapes/DeleteNetworkInterfaceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNetworkInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNetworkInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNetworkInterfaceInput
  },
  output: {
    shape: DeleteNetworkInterfaceOutput
  },
  errors: []
};
