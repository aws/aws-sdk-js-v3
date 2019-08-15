import { ListAccountsInput } from "../shapes/ListAccountsInput";
import { ListAccountsOutput } from "../shapes/ListAccountsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAccounts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAccounts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAccountsInput
  },
  output: {
    shape: ListAccountsOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
