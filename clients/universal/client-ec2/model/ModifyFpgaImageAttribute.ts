import { ModifyFpgaImageAttributeInput } from "./ModifyFpgaImageAttributeInput";
import { ModifyFpgaImageAttributeOutput } from "./ModifyFpgaImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyFpgaImageAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyFpgaImageAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyFpgaImageAttributeInput
  },
  output: {
    shape: ModifyFpgaImageAttributeOutput
  },
  errors: []
};
