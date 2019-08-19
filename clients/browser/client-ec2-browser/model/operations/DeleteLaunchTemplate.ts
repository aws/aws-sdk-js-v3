import { DeleteLaunchTemplateInput } from "../shapes/DeleteLaunchTemplateInput";
import { DeleteLaunchTemplateOutput } from "../shapes/DeleteLaunchTemplateOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLaunchTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLaunchTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLaunchTemplateInput
  },
  output: {
    shape: DeleteLaunchTemplateOutput
  },
  errors: []
};
