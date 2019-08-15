import { CountClosedWorkflowExecutionsInput } from "../shapes/CountClosedWorkflowExecutionsInput";
import { CountClosedWorkflowExecutionsOutput } from "../shapes/CountClosedWorkflowExecutionsOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
