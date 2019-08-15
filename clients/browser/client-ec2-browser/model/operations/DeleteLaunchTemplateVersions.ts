import { DeleteLaunchTemplateVersionsInput } from "../shapes/DeleteLaunchTemplateVersionsInput";
import { DeleteLaunchTemplateVersionsOutput } from "../shapes/DeleteLaunchTemplateVersionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLaunchTemplateVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLaunchTemplateVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLaunchTemplateVersionsInput
  },
  output: {
    shape: DeleteLaunchTemplateVersionsOutput
  },
  errors: []
};
