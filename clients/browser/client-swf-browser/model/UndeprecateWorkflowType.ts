import { UndeprecateWorkflowTypeInput } from "./UndeprecateWorkflowTypeInput";
import { UndeprecateWorkflowTypeOutput } from "./UndeprecateWorkflowTypeOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeAlreadyExistsFault } from "./TypeAlreadyExistsFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UndeprecateWorkflowType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UndeprecateWorkflowType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UndeprecateWorkflowTypeInput
  },
  output: {
    shape: UndeprecateWorkflowTypeOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: TypeAlreadyExistsFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
