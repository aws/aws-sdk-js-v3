import { InvalidInputException } from "./InvalidInputException";
import { InternalException } from "./InternalException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
export type GetExclusionsPreviewExceptionsUnion =
  | InvalidInputException
  | InternalException
  | AccessDeniedException
  | NoSuchEntityException;
