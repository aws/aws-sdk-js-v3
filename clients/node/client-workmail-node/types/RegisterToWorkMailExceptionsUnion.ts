import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EmailAddressInUseException } from "./EmailAddressInUseException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { EntityAlreadyRegisteredException } from "./EntityAlreadyRegisteredException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MailDomainNotFoundException } from "./MailDomainNotFoundException";
import { MailDomainStateException } from "./MailDomainStateException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
export type RegisterToWorkMailExceptionsUnion =
  | DirectoryServiceAuthenticationFailedException
  | DirectoryUnavailableException
  | EmailAddressInUseException
  | EntityNotFoundException
  | EntityStateException
  | EntityAlreadyRegisteredException
  | InvalidParameterException
  | MailDomainNotFoundException
  | MailDomainStateException
  | OrganizationNotFoundException
  | OrganizationStateException;
