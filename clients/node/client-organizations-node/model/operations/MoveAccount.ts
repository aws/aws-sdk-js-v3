import { MoveAccountInput } from "../shapes/MoveAccountInput";
import { MoveAccountOutput } from "../shapes/MoveAccountOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { SourceParentNotFoundException } from "../shapes/SourceParentNotFoundException";
import { DestinationParentNotFoundException } from "../shapes/DestinationParentNotFoundException";
import { DuplicateAccountException } from "../shapes/DuplicateAccountException";
import { AccountNotFoundException } from "../shapes/AccountNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const MoveAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MoveAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MoveAccountInput
  },
  output: {
    shape: MoveAccountOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: SourceParentNotFoundException
    },
    {
      shape: DestinationParentNotFoundException
    },
    {
      shape: DuplicateAccountException
    },
    {
      shape: AccountNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ServiceException
    }
  ]
};
