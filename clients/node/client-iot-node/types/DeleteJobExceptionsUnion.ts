import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteJobExceptionsUnion =
  | InvalidRequestException
  | InvalidStateTransitionException
  | ResourceNotFoundException
  | LimitExceededException
  | ThrottlingException
  | ServiceUnavailableException;
