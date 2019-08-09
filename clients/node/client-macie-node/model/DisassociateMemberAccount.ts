import { DisassociateMemberAccountInput } from "./DisassociateMemberAccountInput";
import { DisassociateMemberAccountOutput } from "./DisassociateMemberAccountOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
