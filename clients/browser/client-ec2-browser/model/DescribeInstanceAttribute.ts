import { DescribeInstanceAttributeInput } from "./DescribeInstanceAttributeInput";
import { DescribeInstanceAttributeOutput } from "./DescribeInstanceAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeInstanceAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstanceAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstanceAttributeInput
  },
  output: {
    shape: DescribeInstanceAttributeOutput
  },
  errors: []
};
