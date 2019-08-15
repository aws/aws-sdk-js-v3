import { RegisterActivityTypeInput } from "../shapes/RegisterActivityTypeInput";
import { RegisterActivityTypeOutput } from "../shapes/RegisterActivityTypeOutput";
import { TypeAlreadyExistsFault } from "../shapes/TypeAlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
