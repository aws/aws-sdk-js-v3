import { ListHandshakesForOrganizationInput } from "./ListHandshakesForOrganizationInput";
import { ListHandshakesForOrganizationOutput } from "./ListHandshakesForOrganizationOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListHandshakesForOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHandshakesForOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListHandshakesForOrganizationInput
  },
  output: {
    shape: ListHandshakesForOrganizationOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ConcurrentModificationException
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
