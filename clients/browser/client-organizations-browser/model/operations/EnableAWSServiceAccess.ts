import { EnableAWSServiceAccessInput } from "../shapes/EnableAWSServiceAccessInput";
import { EnableAWSServiceAccessOutput } from "../shapes/EnableAWSServiceAccessOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableAWSServiceAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableAWSServiceAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableAWSServiceAccessInput
  },
  output: {
    shape: EnableAWSServiceAccessOutput
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
