import { DescribeEnvironmentsInput } from "./DescribeEnvironmentsInput";
import { DescribeEnvironmentsOutput } from "./DescribeEnvironmentsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEnvironments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEnvironments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEnvironmentsInput
  },
  output: {
    shape: DescribeEnvironmentsOutput,
    resultWrapper: "DescribeEnvironmentsResult"
  },
  errors: []
};
