import { DescribeBundleTasksInput } from "./DescribeBundleTasksInput";
import { DescribeBundleTasksOutput } from "./DescribeBundleTasksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeBundleTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBundleTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBundleTasksInput
  },
  output: {
    shape: DescribeBundleTasksOutput
  },
  errors: []
};
