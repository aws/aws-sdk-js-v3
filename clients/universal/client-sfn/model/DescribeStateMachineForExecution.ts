import { DescribeStateMachineForExecutionInput } from "./DescribeStateMachineForExecutionInput";
import { DescribeStateMachineForExecutionOutput } from "./DescribeStateMachineForExecutionOutput";
import { ExecutionDoesNotExist } from "./ExecutionDoesNotExist";
import { InvalidArn } from "./InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
