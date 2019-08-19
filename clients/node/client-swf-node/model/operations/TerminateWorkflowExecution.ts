import { TerminateWorkflowExecutionInput } from "../shapes/TerminateWorkflowExecutionInput";
import { TerminateWorkflowExecutionOutput } from "../shapes/TerminateWorkflowExecutionOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TerminateWorkflowExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateWorkflowExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateWorkflowExecutionInput
  },
  output: {
    shape: TerminateWorkflowExecutionOutput
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
