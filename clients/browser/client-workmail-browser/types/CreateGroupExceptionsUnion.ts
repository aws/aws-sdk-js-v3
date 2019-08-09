import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NameAvailabilityException } from "./NameAvailabilityException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { ReservedNameException } from "./ReservedNameException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type CreateGroupExceptionsUnion =
  | DirectoryServiceAuthenticationFailedException
  | DirectoryUnavailableException
  | InvalidParameterException
  | NameAvailabilityException
  | OrganizationNotFoundException
  | OrganizationStateException
  | ReservedNameException
  | UnsupportedOperationException;
