import { AssociateBudgetWithResourceInput } from "./AssociateBudgetWithResourceInput";
import { AssociateBudgetWithResourceOutput } from "./AssociateBudgetWithResourceOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
