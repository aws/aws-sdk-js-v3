import { DeprecateActivityTypeInput } from "./DeprecateActivityTypeInput";
import { DeprecateActivityTypeOutput } from "./DeprecateActivityTypeOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeDeprecatedFault } from "./TypeDeprecatedFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeprecateActivityType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeprecateActivityType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeprecateActivityTypeInput
  },
  output: {
    shape: DeprecateActivityTypeOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: TypeDeprecatedFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
