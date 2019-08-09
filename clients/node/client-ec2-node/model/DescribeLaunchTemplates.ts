import { DescribeLaunchTemplatesInput } from "./DescribeLaunchTemplatesInput";
import { DescribeLaunchTemplatesOutput } from "./DescribeLaunchTemplatesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLaunchTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLaunchTemplates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLaunchTemplatesInput
  },
  output: {
    shape: DescribeLaunchTemplatesOutput
  },
  errors: []
};
