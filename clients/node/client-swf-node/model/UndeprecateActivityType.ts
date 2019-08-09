import { UndeprecateActivityTypeInput } from "./UndeprecateActivityTypeInput";
import { UndeprecateActivityTypeOutput } from "./UndeprecateActivityTypeOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeAlreadyExistsFault } from "./TypeAlreadyExistsFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
