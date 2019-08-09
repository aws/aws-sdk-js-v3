import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidConfigurationException } from "./InvalidConfigurationException";
import { EmailAddressInUseException } from "./EmailAddressInUseException";
import { MailDomainNotFoundException } from "./MailDomainNotFoundException";
import { MailDomainStateException } from "./MailDomainStateException";
import { NameAvailabilityException } from "./NameAvailabilityException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
export type UpdateResourceExceptionsUnion =
  | DirectoryUnavailableException
  | EntityNotFoundException
  | EntityStateException
  | InvalidConfigurationException
  | EmailAddressInUseException
  | MailDomainNotFoundException
  | MailDomainStateException
  | NameAvailabilityException
  | OrganizationNotFoundException
  | OrganizationStateException;
