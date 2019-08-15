import { DescribeStackInstanceInput } from "../shapes/DescribeStackInstanceInput";
import { DescribeStackInstanceOutput } from "../shapes/DescribeStackInstanceOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { StackInstanceNotFoundException } from "../shapes/StackInstanceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackInstanceInput
  },
  output: {
    shape: DescribeStackInstanceOutput,
    resultWrapper: "DescribeStackInstanceResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    },
    {
      shape: StackInstanceNotFoundException
    }
  ]
};
