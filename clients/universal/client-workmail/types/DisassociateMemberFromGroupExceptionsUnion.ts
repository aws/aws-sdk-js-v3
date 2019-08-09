import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type DisassociateMemberFromGroupExceptionsUnion =
  | DirectoryServiceAuthenticationFailedException
  | DirectoryUnavailableException
  | EntityNotFoundException
  | EntityStateException
  | InvalidParameterException
  | OrganizationNotFoundException
  | OrganizationStateException
  | UnsupportedOperationException;
