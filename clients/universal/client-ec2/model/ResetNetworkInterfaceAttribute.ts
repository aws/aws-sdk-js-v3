import { ResetNetworkInterfaceAttributeInput } from "./ResetNetworkInterfaceAttributeInput";
import { ResetNetworkInterfaceAttributeOutput } from "./ResetNetworkInterfaceAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetNetworkInterfaceAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetNetworkInterfaceAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetNetworkInterfaceAttributeInput
  },
  output: {
    shape: ResetNetworkInterfaceAttributeOutput
  },
  errors: []
};
