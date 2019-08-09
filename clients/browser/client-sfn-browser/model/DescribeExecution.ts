import { DescribeExecutionInput } from "./DescribeExecutionInput";
import { DescribeExecutionOutput } from "./DescribeExecutionOutput";
import { ExecutionDoesNotExist } from "./ExecutionDoesNotExist";
import { InvalidArn } from "./InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
