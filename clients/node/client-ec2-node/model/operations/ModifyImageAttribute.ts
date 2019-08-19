import { ModifyImageAttributeInput } from "../shapes/ModifyImageAttributeInput";
import { ModifyImageAttributeOutput } from "../shapes/ModifyImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
