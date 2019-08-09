import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { NameAvailabilityException } from "./NameAvailabilityException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { ReservedNameException } from "./ReservedNameException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type CreateUserExceptionsUnion =
  | DirectoryServiceAuthenticationFailedException
  | DirectoryUnavailableException
  | InvalidParameterException
  | InvalidPasswordException
  | NameAvailabilityException
  | OrganizationNotFoundException
  | OrganizationStateException
  | ReservedNameException
  | UnsupportedOperationException;
