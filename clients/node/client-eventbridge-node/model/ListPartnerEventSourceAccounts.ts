import { ListPartnerEventSourceAccountsInput } from "./ListPartnerEventSourceAccountsInput";
import { ListPartnerEventSourceAccountsOutput } from "./ListPartnerEventSourceAccountsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPartnerEventSourceAccounts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPartnerEventSourceAccounts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPartnerEventSourceAccountsInput
  },
  output: {
    shape: ListPartnerEventSourceAccountsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalException
    }
  ]
};
