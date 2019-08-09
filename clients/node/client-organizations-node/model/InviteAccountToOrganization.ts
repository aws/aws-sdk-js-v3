import { InviteAccountToOrganizationInput } from "./InviteAccountToOrganizationInput";
import { InviteAccountToOrganizationOutput } from "./InviteAccountToOrganizationOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { AccountOwnerNotVerifiedException } from "./AccountOwnerNotVerifiedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { HandshakeConstraintViolationException } from "./HandshakeConstraintViolationException";
import { DuplicateHandshakeException } from "./DuplicateHandshakeException";
import { InvalidInputException } from "./InvalidInputException";
import { FinalizingOrganizationException } from "./FinalizingOrganizationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
