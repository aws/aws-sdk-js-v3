import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
export type DeleteProjectExceptionsUnion =
  | ConcurrentModificationException
  | ValidationException
  | InvalidServiceRoleException;
