import { SignalWorkflowExecutionInput } from "./SignalWorkflowExecutionInput";
import { SignalWorkflowExecutionOutput } from "./SignalWorkflowExecutionOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SignalWorkflowExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SignalWorkflowExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SignalWorkflowExecutionInput
  },
  output: {
    shape: SignalWorkflowExecutionOutput
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
