import { TerminateWorkflowExecutionInput } from "./TerminateWorkflowExecutionInput";
import { TerminateWorkflowExecutionOutput } from "./TerminateWorkflowExecutionOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
