import { DescribeDBEngineVersionsInput } from "../shapes/DescribeDBEngineVersionsInput";
import { DescribeDBEngineVersionsOutput } from "../shapes/DescribeDBEngineVersionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBEngineVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBEngineVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBEngineVersionsInput
  },
  output: {
    shape: DescribeDBEngineVersionsOutput,
    resultWrapper: "DescribeDBEngineVersionsResult"
  },
  errors: []
};
