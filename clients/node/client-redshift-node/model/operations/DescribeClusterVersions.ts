import { DescribeClusterVersionsInput } from "../shapes/DescribeClusterVersionsInput";
import { DescribeClusterVersionsOutput } from "../shapes/DescribeClusterVersionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterVersionsInput
  },
  output: {
    shape: DescribeClusterVersionsOutput,
    resultWrapper: "DescribeClusterVersionsResult"
  },
  errors: []
};
