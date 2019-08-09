import { DescribeSourceRegionsInput } from "./DescribeSourceRegionsInput";
import { DescribeSourceRegionsOutput } from "./DescribeSourceRegionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSourceRegions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSourceRegions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSourceRegionsInput
  },
  output: {
    shape: DescribeSourceRegionsOutput,
    resultWrapper: "DescribeSourceRegionsResult"
  },
  errors: []
};
