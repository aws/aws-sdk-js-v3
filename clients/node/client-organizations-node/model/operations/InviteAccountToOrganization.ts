import { InviteAccountToOrganizationInput } from "../shapes/InviteAccountToOrganizationInput";
import { InviteAccountToOrganizationOutput } from "../shapes/InviteAccountToOrganizationOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { AccountOwnerNotVerifiedException } from "../shapes/AccountOwnerNotVerifiedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { HandshakeConstraintViolationException } from "../shapes/HandshakeConstraintViolationException";
import { DuplicateHandshakeException } from "../shapes/DuplicateHandshakeException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { FinalizingOrganizationException } from "../shapes/FinalizingOrganizationException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InviteAccountToOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InviteAccountToOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: InviteAccountToOrganizationInput
  },
  output: {
    shape: InviteAccountToOrganizationOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: AccountOwnerNotVerifiedException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: HandshakeConstraintViolationException
    },
    {
      shape: DuplicateHandshakeException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: FinalizingOrganizationException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
