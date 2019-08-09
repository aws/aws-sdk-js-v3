import { DescribeClassicLinkInstancesInput } from "./DescribeClassicLinkInstancesInput";
import { DescribeClassicLinkInstancesOutput } from "./DescribeClassicLinkInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeClassicLinkInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClassicLinkInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClassicLinkInstancesInput
  },
  output: {
    shape: DescribeClassicLinkInstancesOutput
  },
  errors: []
};
