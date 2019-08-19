import { InvalidInputException } from "./InvalidInputException";
import { PreviewGenerationInProgressException } from "./PreviewGenerationInProgressException";
import { InternalException } from "./InternalException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type CreateExclusionsPreviewExceptionsUnion =
  | InvalidInputException
  | PreviewGenerationInProgressException
  | InternalException
  | AccessDeniedException
  | NoSuchEntityException
  | ServiceTemporarilyUnavailableException;
