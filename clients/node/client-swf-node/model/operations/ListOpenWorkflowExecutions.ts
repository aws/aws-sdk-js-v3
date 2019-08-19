import { ListOpenWorkflowExecutionsInput } from "../shapes/ListOpenWorkflowExecutionsInput";
import { ListOpenWorkflowExecutionsOutput } from "../shapes/ListOpenWorkflowExecutionsOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
