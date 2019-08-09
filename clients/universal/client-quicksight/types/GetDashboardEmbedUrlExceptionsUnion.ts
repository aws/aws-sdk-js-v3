import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { DomainNotWhitelistedException } from "./DomainNotWhitelistedException";
import { QuickSightUserNotFoundException } from "./QuickSightUserNotFoundException";
import { IdentityTypeNotSupportedException } from "./IdentityTypeNotSupportedException";
import { SessionLifetimeInMinutesInvalidException } from "./SessionLifetimeInMinutesInvalidException";
import { UnsupportedUserEditionException } from "./UnsupportedUserEditionException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type GetDashboardEmbedUrlExceptionsUnion =
  | AccessDeniedException
  | InvalidParameterValueException
  | ResourceExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | PreconditionNotMetException
  | DomainNotWhitelistedException
  | QuickSightUserNotFoundException
  | IdentityTypeNotSupportedException
  | SessionLifetimeInMinutesInvalidException
  | UnsupportedUserEditionException
  | InternalFailureException
  | ResourceUnavailableException;
