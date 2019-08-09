import { ListMemberAccountsInput } from "./ListMemberAccountsInput";
import { ListMemberAccountsOutput } from "./ListMemberAccountsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
