import { UndeprecateWorkflowTypeInput } from "../shapes/UndeprecateWorkflowTypeInput";
import { UndeprecateWorkflowTypeOutput } from "../shapes/UndeprecateWorkflowTypeOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { TypeAlreadyExistsFault } from "../shapes/TypeAlreadyExistsFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
