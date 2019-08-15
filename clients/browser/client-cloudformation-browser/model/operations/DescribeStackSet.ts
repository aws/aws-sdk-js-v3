import { DescribeStackSetInput } from "../shapes/DescribeStackSetInput";
import { DescribeStackSetOutput } from "../shapes/DescribeStackSetOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackSetInput
  },
  output: {
    shape: DescribeStackSetOutput,
    resultWrapper: "DescribeStackSetResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    }
  ]
};
