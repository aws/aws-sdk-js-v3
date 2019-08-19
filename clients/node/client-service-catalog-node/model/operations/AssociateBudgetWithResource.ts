import { AssociateBudgetWithResourceInput } from "../shapes/AssociateBudgetWithResourceInput";
import { AssociateBudgetWithResourceOutput } from "../shapes/AssociateBudgetWithResourceOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateBudgetWithResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateBudgetWithResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateBudgetWithResourceInput
  },
  output: {
    shape: AssociateBudgetWithResourceOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: DuplicateResourceException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
