import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { EntityNotFoundException } from "./EntityNotFoundException";
export type GetMailboxDetailsExceptionsUnion =
  | OrganizationNotFoundException
  | OrganizationStateException
  | EntityNotFoundException;
