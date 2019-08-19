import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalException } from "./InternalException";
export type ListS3ResourcesExceptionsUnion =
  | InvalidInputException
  | AccessDeniedException
  | InternalException;
