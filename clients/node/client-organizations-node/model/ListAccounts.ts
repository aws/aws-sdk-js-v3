import { ListAccountsInput } from "./ListAccountsInput";
import { ListAccountsOutput } from "./ListAccountsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
