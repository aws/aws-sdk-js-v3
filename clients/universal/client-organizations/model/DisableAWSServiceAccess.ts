import { DisableAWSServiceAccessInput } from "./DisableAWSServiceAccessInput";
import { DisableAWSServiceAccessOutput } from "./DisableAWSServiceAccessOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
