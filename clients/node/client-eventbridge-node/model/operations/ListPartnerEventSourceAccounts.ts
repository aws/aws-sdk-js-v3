import { ListPartnerEventSourceAccountsInput } from "../shapes/ListPartnerEventSourceAccountsInput";
import { ListPartnerEventSourceAccountsOutput } from "../shapes/ListPartnerEventSourceAccountsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
