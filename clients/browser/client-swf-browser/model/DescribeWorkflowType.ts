import { DescribeWorkflowTypeInput } from "./DescribeWorkflowTypeInput";
import { DescribeWorkflowTypeOutput } from "./DescribeWorkflowTypeOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeWorkflowType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkflowType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkflowTypeInput
  },
  output: {
    shape: DescribeWorkflowTypeOutput
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
