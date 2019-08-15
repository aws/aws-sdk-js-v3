import { RegisterWorkflowTypeInput } from "../shapes/RegisterWorkflowTypeInput";
import { RegisterWorkflowTypeOutput } from "../shapes/RegisterWorkflowTypeOutput";
import { TypeAlreadyExistsFault } from "../shapes/TypeAlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
