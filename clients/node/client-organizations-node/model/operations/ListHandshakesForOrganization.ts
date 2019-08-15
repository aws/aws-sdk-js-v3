import { ListHandshakesForOrganizationInput } from "../shapes/ListHandshakesForOrganizationInput";
import { ListHandshakesForOrganizationOutput } from "../shapes/ListHandshakesForOrganizationOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
