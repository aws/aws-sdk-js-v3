import { ResetFpgaImageAttributeInput } from "../shapes/ResetFpgaImageAttributeInput";
import { ResetFpgaImageAttributeOutput } from "../shapes/ResetFpgaImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetFpgaImageAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetFpgaImageAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetFpgaImageAttributeInput
  },
  output: {
    shape: ResetFpgaImageAttributeOutput
  },
  errors: []
};
