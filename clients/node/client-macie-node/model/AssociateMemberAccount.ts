import { AssociateMemberAccountInput } from "./AssociateMemberAccountInput";
import { AssociateMemberAccountOutput } from "./AssociateMemberAccountOutput";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
