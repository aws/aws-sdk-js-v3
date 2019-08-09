import { ModifyImageAttributeInput } from "./ModifyImageAttributeInput";
import { ModifyImageAttributeOutput } from "./ModifyImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyImageAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyImageAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyImageAttributeInput
  },
  output: {
    shape: ModifyImageAttributeOutput
  },
  errors: []
};
