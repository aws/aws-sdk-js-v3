import { DescribeWorkflowExecutionInput } from "../shapes/DescribeWorkflowExecutionInput";
import { DescribeWorkflowExecutionOutput } from "../shapes/DescribeWorkflowExecutionOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWorkflowExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkflowExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkflowExecutionInput
  },
  output: {
    shape: DescribeWorkflowExecutionOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
