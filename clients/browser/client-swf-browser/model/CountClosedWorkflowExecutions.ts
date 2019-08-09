import { CountClosedWorkflowExecutionsInput } from "./CountClosedWorkflowExecutionsInput";
import { CountClosedWorkflowExecutionsOutput } from "./CountClosedWorkflowExecutionsOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CountClosedWorkflowExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CountClosedWorkflowExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CountClosedWorkflowExecutionsInput
  },
  output: {
    shape: CountClosedWorkflowExecutionsOutput
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
