import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccessException } from "./InvalidAccessException";
export type DeleteInvitationsExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | InvalidAccessException;
