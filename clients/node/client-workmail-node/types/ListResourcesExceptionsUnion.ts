import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
export type ListResourcesExceptionsUnion =
  | InvalidParameterException
  | OrganizationNotFoundException
  | OrganizationStateException;
