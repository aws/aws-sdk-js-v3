import { RemoveAccountFromOrganizationInput } from "./RemoveAccountFromOrganizationInput";
import { RemoveAccountFromOrganizationOutput } from "./RemoveAccountFromOrganizationOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AccountNotFoundException } from "./AccountNotFoundException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { MasterCannotLeaveOrganizationException } from "./MasterCannotLeaveOrganizationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveAccountFromOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveAccountFromOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveAccountFromOrganizationInput
  },
  output: {
    shape: RemoveAccountFromOrganizationOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AccountNotFoundException
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
      shape: MasterCannotLeaveOrganizationException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
