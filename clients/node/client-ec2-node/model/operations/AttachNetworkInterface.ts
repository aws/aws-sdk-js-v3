import { AttachNetworkInterfaceInput } from "../shapes/AttachNetworkInterfaceInput";
import { AttachNetworkInterfaceOutput } from "../shapes/AttachNetworkInterfaceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachNetworkInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachNetworkInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachNetworkInterfaceInput
  },
  output: {
    shape: AttachNetworkInterfaceOutput
  },
  errors: []
};
