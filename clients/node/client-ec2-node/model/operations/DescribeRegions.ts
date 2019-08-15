import { DescribeRegionsInput } from "../shapes/DescribeRegionsInput";
import { DescribeRegionsOutput } from "../shapes/DescribeRegionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRegions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRegions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRegionsInput
  },
  output: {
    shape: DescribeRegionsOutput
  },
  errors: []
};
