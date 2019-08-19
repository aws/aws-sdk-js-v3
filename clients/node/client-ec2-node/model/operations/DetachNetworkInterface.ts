import { DetachNetworkInterfaceInput } from "../shapes/DetachNetworkInterfaceInput";
import { DetachNetworkInterfaceOutput } from "../shapes/DetachNetworkInterfaceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachNetworkInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachNetworkInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachNetworkInterfaceInput
  },
  output: {
    shape: DetachNetworkInterfaceOutput
  },
  errors: []
};
