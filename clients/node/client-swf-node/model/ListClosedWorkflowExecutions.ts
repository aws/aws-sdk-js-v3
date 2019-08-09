import { ListClosedWorkflowExecutionsInput } from "./ListClosedWorkflowExecutionsInput";
import { ListClosedWorkflowExecutionsOutput } from "./ListClosedWorkflowExecutionsOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListClosedWorkflowExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListClosedWorkflowExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListClosedWorkflowExecutionsInput
  },
  output: {
    shape: ListClosedWorkflowExecutionsOutput
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
