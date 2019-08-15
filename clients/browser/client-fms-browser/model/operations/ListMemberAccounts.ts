import { ListMemberAccountsInput } from "../shapes/ListMemberAccountsInput";
import { ListMemberAccountsOutput } from "../shapes/ListMemberAccountsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
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
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
