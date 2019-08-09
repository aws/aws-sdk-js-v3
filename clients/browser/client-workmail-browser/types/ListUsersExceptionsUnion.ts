import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
export type ListUsersExceptionsUnion =
  | InvalidParameterException
  | OrganizationNotFoundException
  | OrganizationStateException;
