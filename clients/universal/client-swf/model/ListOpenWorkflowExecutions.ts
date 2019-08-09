import { ListOpenWorkflowExecutionsInput } from "./ListOpenWorkflowExecutionsInput";
import { ListOpenWorkflowExecutionsOutput } from "./ListOpenWorkflowExecutionsOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListOpenWorkflowExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOpenWorkflowExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOpenWorkflowExecutionsInput
  },
  output: {
    shape: ListOpenWorkflowExecutionsOutput
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
