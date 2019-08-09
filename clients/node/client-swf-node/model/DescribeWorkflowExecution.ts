import { DescribeWorkflowExecutionInput } from "./DescribeWorkflowExecutionInput";
import { DescribeWorkflowExecutionOutput } from "./DescribeWorkflowExecutionOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
