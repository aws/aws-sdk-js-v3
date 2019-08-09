import { ModifySubnetAttributeInput } from "./ModifySubnetAttributeInput";
import { ModifySubnetAttributeOutput } from "./ModifySubnetAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifySubnetAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifySubnetAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifySubnetAttributeInput
  },
  output: {
    shape: ModifySubnetAttributeOutput
  },
  errors: []
};
