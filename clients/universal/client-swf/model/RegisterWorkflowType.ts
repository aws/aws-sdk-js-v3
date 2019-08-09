import { RegisterWorkflowTypeInput } from "./RegisterWorkflowTypeInput";
import { RegisterWorkflowTypeOutput } from "./RegisterWorkflowTypeOutput";
import { TypeAlreadyExistsFault } from "./TypeAlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterWorkflowType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterWorkflowType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterWorkflowTypeInput
  },
  output: {
    shape: RegisterWorkflowTypeOutput
  },
  errors: [
    {
      shape: TypeAlreadyExistsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
