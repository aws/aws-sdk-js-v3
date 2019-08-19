import { LeaveOrganizationInput } from "../shapes/LeaveOrganizationInput";
import { LeaveOrganizationOutput } from "../shapes/LeaveOrganizationOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AccountNotFoundException } from "../shapes/AccountNotFoundException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { MasterCannotLeaveOrganizationException } from "../shapes/MasterCannotLeaveOrganizationException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
