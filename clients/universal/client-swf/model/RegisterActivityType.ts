import { RegisterActivityTypeInput } from "./RegisterActivityTypeInput";
import { RegisterActivityTypeOutput } from "./RegisterActivityTypeOutput";
import { TypeAlreadyExistsFault } from "./TypeAlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterActivityType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterActivityType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterActivityTypeInput
  },
  output: {
    shape: RegisterActivityTypeOutput
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
