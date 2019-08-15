import { ListAWSServiceAccessForOrganizationInput } from "../shapes/ListAWSServiceAccessForOrganizationInput";
import { ListAWSServiceAccessForOrganizationOutput } from "../shapes/ListAWSServiceAccessForOrganizationOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAWSServiceAccessForOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAWSServiceAccessForOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAWSServiceAccessForOrganizationInput
  },
  output: {
    shape: ListAWSServiceAccessForOrganizationOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ConstraintViolationException
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
