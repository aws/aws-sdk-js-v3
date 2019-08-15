import { DisassociateMemberAccountInput } from "../shapes/DisassociateMemberAccountInput";
import { DisassociateMemberAccountOutput } from "../shapes/DisassociateMemberAccountOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateMemberAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateMemberAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateMemberAccountInput
  },
  output: {
    shape: DisassociateMemberAccountOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalException
    }
  ]
};
