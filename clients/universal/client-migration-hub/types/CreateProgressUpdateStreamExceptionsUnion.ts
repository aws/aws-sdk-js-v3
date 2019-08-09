import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DryRunOperation } from "./DryRunOperation";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidInputException } from "./InvalidInputException";
export type CreateProgressUpdateStreamExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ServiceUnavailableException
  | DryRunOperation
  | UnauthorizedOperation
  | InvalidInputException;
