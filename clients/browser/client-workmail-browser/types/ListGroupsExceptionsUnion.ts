import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
export type ListGroupsExceptionsUnion =
  | EntityNotFoundException
  | InvalidParameterException
  | OrganizationNotFoundException
  | OrganizationStateException;
