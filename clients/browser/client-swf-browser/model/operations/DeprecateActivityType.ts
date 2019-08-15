import { DeprecateActivityTypeInput } from "../shapes/DeprecateActivityTypeInput";
import { DeprecateActivityTypeOutput } from "../shapes/DeprecateActivityTypeOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { TypeDeprecatedFault } from "../shapes/TypeDeprecatedFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
