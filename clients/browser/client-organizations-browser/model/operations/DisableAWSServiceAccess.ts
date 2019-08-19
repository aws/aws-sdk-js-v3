import { DisableAWSServiceAccessInput } from "../shapes/DisableAWSServiceAccessInput";
import { DisableAWSServiceAccessOutput } from "../shapes/DisableAWSServiceAccessOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableAWSServiceAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableAWSServiceAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableAWSServiceAccessInput
  },
  output: {
    shape: DisableAWSServiceAccessOutput
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
