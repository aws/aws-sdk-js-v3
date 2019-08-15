import { AssociateMemberAccountInput } from "../shapes/AssociateMemberAccountInput";
import { AssociateMemberAccountOutput } from "../shapes/AssociateMemberAccountOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateMemberAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateMemberAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateMemberAccountInput
  },
  output: {
    shape: AssociateMemberAccountOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalException
    }
  ]
};
