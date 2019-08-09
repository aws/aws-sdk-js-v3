import { CreateLaunchTemplateVersionInput } from "./CreateLaunchTemplateVersionInput";
import { CreateLaunchTemplateVersionOutput } from "./CreateLaunchTemplateVersionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
