import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type CreateResourceGroupExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | AccessDeniedException
  | ServiceTemporarilyUnavailableException;
