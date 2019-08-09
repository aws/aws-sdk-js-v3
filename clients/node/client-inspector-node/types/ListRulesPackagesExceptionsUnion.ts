import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
export type ListRulesPackagesExceptionsUnion =
  | InternalException
  | InvalidInputException
  | AccessDeniedException;
