import { DescribeTrainingJobInput } from "../shapes/DescribeTrainingJobInput";
import { DescribeTrainingJobOutput } from "../shapes/DescribeTrainingJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrainingJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrainingJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrainingJobInput
  },
  output: {
    shape: DescribeTrainingJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
