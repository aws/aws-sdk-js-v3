import { ModifyInstanceAttributeInput } from "../shapes/ModifyInstanceAttributeInput";
import { ModifyInstanceAttributeOutput } from "../shapes/ModifyInstanceAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyInstanceAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyInstanceAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyInstanceAttributeInput
  },
  output: {
    shape: ModifyInstanceAttributeOutput
  },
  errors: []
};
