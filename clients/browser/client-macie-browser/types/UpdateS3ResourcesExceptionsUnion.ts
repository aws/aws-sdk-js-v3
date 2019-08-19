import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalException } from "./InternalException";
export type UpdateS3ResourcesExceptionsUnion =
  | InvalidInputException
  | AccessDeniedException
  | InternalException;
