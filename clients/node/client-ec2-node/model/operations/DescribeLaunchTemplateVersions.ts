import { DescribeLaunchTemplateVersionsInput } from "../shapes/DescribeLaunchTemplateVersionsInput";
import { DescribeLaunchTemplateVersionsOutput } from "../shapes/DescribeLaunchTemplateVersionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLaunchTemplateVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLaunchTemplateVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLaunchTemplateVersionsInput
  },
  output: {
    shape: DescribeLaunchTemplateVersionsOutput
  },
  errors: []
};
