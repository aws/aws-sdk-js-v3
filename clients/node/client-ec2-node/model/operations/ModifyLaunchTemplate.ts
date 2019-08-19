import { ModifyLaunchTemplateInput } from "../shapes/ModifyLaunchTemplateInput";
import { ModifyLaunchTemplateOutput } from "../shapes/ModifyLaunchTemplateOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyLaunchTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyLaunchTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyLaunchTemplateInput
  },
  output: {
    shape: ModifyLaunchTemplateOutput
  },
  errors: []
};
