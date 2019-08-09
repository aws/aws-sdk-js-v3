import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DisassociateTeamMemberExceptionsUnion =
  | ProjectNotFoundException
  | ValidationException
  | InvalidServiceRoleException
  | ConcurrentModificationException;
