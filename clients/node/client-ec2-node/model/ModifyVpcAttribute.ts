import { ModifyVpcAttributeInput } from "./ModifyVpcAttributeInput";
import { ModifyVpcAttributeOutput } from "./ModifyVpcAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyVpcAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpcAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpcAttributeInput
  },
  output: {
    shape: ModifyVpcAttributeOutput
  },
  errors: []
};
