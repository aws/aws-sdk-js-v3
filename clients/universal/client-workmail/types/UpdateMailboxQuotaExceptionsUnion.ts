import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
export type UpdateMailboxQuotaExceptionsUnion =
  | InvalidParameterException
  | OrganizationNotFoundException
  | OrganizationStateException
  | EntityNotFoundException
  | EntityStateException;
