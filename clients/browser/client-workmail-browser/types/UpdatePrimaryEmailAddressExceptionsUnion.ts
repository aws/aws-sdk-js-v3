import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EmailAddressInUseException } from "./EmailAddressInUseException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MailDomainNotFoundException } from "./MailDomainNotFoundException";
import { MailDomainStateException } from "./MailDomainStateException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type UpdatePrimaryEmailAddressExceptionsUnion =
  | DirectoryServiceAuthenticationFailedException
  | DirectoryUnavailableException
  | EmailAddressInUseException
  | EntityNotFoundException
  | EntityStateException
  | InvalidParameterException
  | MailDomainNotFoundException
  | MailDomainStateException
  | OrganizationNotFoundException
  | OrganizationStateException
  | UnsupportedOperationException;
