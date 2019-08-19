import { UndeprecateActivityTypeInput } from "../shapes/UndeprecateActivityTypeInput";
import { UndeprecateActivityTypeOutput } from "../shapes/UndeprecateActivityTypeOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { TypeAlreadyExistsFault } from "../shapes/TypeAlreadyExistsFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UndeprecateActivityType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UndeprecateActivityType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UndeprecateActivityTypeInput
  },
  output: {
    shape: UndeprecateActivityTypeOutput
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
