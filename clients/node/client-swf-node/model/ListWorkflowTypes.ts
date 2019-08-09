import { ListWorkflowTypesInput } from "./ListWorkflowTypesInput";
import { ListWorkflowTypesOutput } from "./ListWorkflowTypesOutput";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListWorkflowTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWorkflowTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWorkflowTypesInput
  },
  output: {
    shape: ListWorkflowTypesOutput
  },
  errors: [
    {
      shape: OperationNotPermittedFault
    },
    {
      shape: UnknownResourceFault
    }
  ]
};
