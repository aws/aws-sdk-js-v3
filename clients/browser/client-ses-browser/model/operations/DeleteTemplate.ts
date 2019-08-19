import { DeleteTemplateInput } from "../shapes/DeleteTemplateInput";
import { DeleteTemplateOutput } from "../shapes/DeleteTemplateOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTemplateInput
  },
  output: {
    shape: DeleteTemplateOutput,
    resultWrapper: "DeleteTemplateResult"
  },
  errors: []
};
