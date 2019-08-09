import { ListAWSServiceAccessForOrganizationInput } from "./ListAWSServiceAccessForOrganizationInput";
import { ListAWSServiceAccessForOrganizationOutput } from "./ListAWSServiceAccessForOrganizationOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
