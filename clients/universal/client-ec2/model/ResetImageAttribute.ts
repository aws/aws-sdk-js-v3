import { ResetImageAttributeInput } from "./ResetImageAttributeInput";
import { ResetImageAttributeOutput } from "./ResetImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
