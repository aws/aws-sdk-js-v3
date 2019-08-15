import { ListWorkflowTypesInput } from "../shapes/ListWorkflowTypesInput";
import { ListWorkflowTypesOutput } from "../shapes/ListWorkflowTypesOutput";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
