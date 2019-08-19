import { DescribeStackSetOperationInput } from "../shapes/DescribeStackSetOperationInput";
import { DescribeStackSetOperationOutput } from "../shapes/DescribeStackSetOperationOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationNotFoundException } from "../shapes/OperationNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackSetOperation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackSetOperation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackSetOperationInput
  },
  output: {
    shape: DescribeStackSetOperationOutput,
    resultWrapper: "DescribeStackSetOperationResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    },
    {
      shape: OperationNotFoundException
    }
  ]
};
