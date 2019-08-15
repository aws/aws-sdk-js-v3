import { DescribeExecutionInput } from "../shapes/DescribeExecutionInput";
import { DescribeExecutionOutput } from "../shapes/DescribeExecutionOutput";
import { ExecutionDoesNotExist } from "../shapes/ExecutionDoesNotExist";
import { InvalidArn } from "../shapes/InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeExecutionInput
  },
  output: {
    shape: DescribeExecutionOutput
  },
  errors: [
    {
      shape: ExecutionDoesNotExist
    },
    {
      shape: InvalidArn
    }
  ]
};
