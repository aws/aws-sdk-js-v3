import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalException } from "./InternalException";
export type AssociateS3ResourcesExceptionsUnion =
  | InvalidInputException
  | AccessDeniedException
  | LimitExceededException
  | InternalException;
