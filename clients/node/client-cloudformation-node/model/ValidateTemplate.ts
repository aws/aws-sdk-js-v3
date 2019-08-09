import { ValidateTemplateInput } from "./ValidateTemplateInput";
import { ValidateTemplateOutput } from "./ValidateTemplateOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ValidateTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ValidateTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ValidateTemplateInput
  },
  output: {
    shape: ValidateTemplateOutput,
    resultWrapper: "ValidateTemplateResult"
  },
  errors: []
};
