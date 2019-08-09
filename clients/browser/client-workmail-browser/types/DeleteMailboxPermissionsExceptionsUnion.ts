import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
export type DeleteMailboxPermissionsExceptionsUnion =
  | EntityNotFoundException
  | EntityStateException
  | InvalidParameterException
  | OrganizationNotFoundException
  | OrganizationStateException;
