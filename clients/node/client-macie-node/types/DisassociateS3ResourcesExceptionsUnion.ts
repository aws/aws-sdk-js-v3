import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalException } from "./InternalException";
export type DisassociateS3ResourcesExceptionsUnion =
  | InvalidInputException
  | AccessDeniedException
  | InternalException;
