import { MoveAccountInput } from "./MoveAccountInput";
import { MoveAccountOutput } from "./MoveAccountOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidInputException } from "./InvalidInputException";
import { SourceParentNotFoundException } from "./SourceParentNotFoundException";
import { DestinationParentNotFoundException } from "./DestinationParentNotFoundException";
import { DuplicateAccountException } from "./DuplicateAccountException";
import { AccountNotFoundException } from "./AccountNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
