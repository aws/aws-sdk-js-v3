import { DescribeApplicationVersionsInput } from "./DescribeApplicationVersionsInput";
import { DescribeApplicationVersionsOutput } from "./DescribeApplicationVersionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeApplicationVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeApplicationVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeApplicationVersionsInput
  },
  output: {
    shape: DescribeApplicationVersionsOutput,
    resultWrapper: "DescribeApplicationVersionsResult"
  },
  errors: []
};
