import { DescribeStackResourcesInput } from "../shapes/DescribeStackResourcesInput";
import { DescribeStackResourcesOutput } from "../shapes/DescribeStackResourcesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackResourcesInput
  },
  output: {
    shape: DescribeStackResourcesOutput,
    resultWrapper: "DescribeStackResourcesResult"
  },
  errors: []
};
