import { DescribeStateMachineForExecutionInput } from "../shapes/DescribeStateMachineForExecutionInput";
import { DescribeStateMachineForExecutionOutput } from "../shapes/DescribeStateMachineForExecutionOutput";
import { ExecutionDoesNotExist } from "../shapes/ExecutionDoesNotExist";
import { InvalidArn } from "../shapes/InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStateMachineForExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStateMachineForExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStateMachineForExecutionInput
  },
  output: {
    shape: DescribeStateMachineForExecutionOutput
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
