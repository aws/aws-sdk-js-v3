import { LeaveOrganizationInput } from "./LeaveOrganizationInput";
import { LeaveOrganizationOutput } from "./LeaveOrganizationOutput";
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

export const LeaveOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "LeaveOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: LeaveOrganizationInput
  },
  output: {
    shape: LeaveOrganizationOutput
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
