import { ModifyNetworkInterfaceAttributeInput } from "../shapes/ModifyNetworkInterfaceAttributeInput";
import { ModifyNetworkInterfaceAttributeOutput } from "../shapes/ModifyNetworkInterfaceAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyNetworkInterfaceAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyNetworkInterfaceAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyNetworkInterfaceAttributeInput
  },
  output: {
    shape: ModifyNetworkInterfaceAttributeOutput
  },
  errors: []
};
