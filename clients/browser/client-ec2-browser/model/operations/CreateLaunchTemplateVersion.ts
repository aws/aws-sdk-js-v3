import { CreateLaunchTemplateVersionInput } from "../shapes/CreateLaunchTemplateVersionInput";
import { CreateLaunchTemplateVersionOutput } from "../shapes/CreateLaunchTemplateVersionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLaunchTemplateVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLaunchTemplateVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLaunchTemplateVersionInput
  },
  output: {
    shape: CreateLaunchTemplateVersionOutput
  },
  errors: []
};
