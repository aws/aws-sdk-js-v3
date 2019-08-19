import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidCrossAccountRoleException } from "./InvalidCrossAccountRoleException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type RegisterCrossAccountAccessRoleExceptionsUnion =
  | InternalException
  | InvalidInputException
  | AccessDeniedException
  | InvalidCrossAccountRoleException
  | ServiceTemporarilyUnavailableException;
