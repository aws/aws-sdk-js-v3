import { ListMemberAccountsInput } from "../shapes/ListMemberAccountsInput";
import { ListMemberAccountsOutput } from "../shapes/ListMemberAccountsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMemberAccounts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMemberAccounts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListMemberAccountsInput
  },
  output: {
    shape: ListMemberAccountsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    }
  ]
};
