import { DescribeStackInstanceInput } from "./DescribeStackInstanceInput";
import { DescribeStackInstanceOutput } from "./DescribeStackInstanceOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { StackInstanceNotFoundException } from "./StackInstanceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
