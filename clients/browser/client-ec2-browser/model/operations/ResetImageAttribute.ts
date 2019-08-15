import { ResetImageAttributeInput } from "../shapes/ResetImageAttributeInput";
import { ResetImageAttributeOutput } from "../shapes/ResetImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetImageAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetImageAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetImageAttributeInput
  },
  output: {
    shape: ResetImageAttributeOutput
  },
  errors: []
};
