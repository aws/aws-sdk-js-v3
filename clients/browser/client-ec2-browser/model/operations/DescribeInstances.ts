import { DescribeInstancesInput } from "../shapes/DescribeInstancesInput";
import { DescribeInstancesOutput } from "../shapes/DescribeInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstancesInput
  },
  output: {
    shape: DescribeInstancesOutput
  },
  errors: []
};
