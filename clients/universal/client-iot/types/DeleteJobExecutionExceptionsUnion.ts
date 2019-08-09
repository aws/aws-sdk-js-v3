import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteJobExecutionExceptionsUnion =
  | InvalidRequestException
  | InvalidStateTransitionException
  | ResourceNotFoundException
  | ThrottlingException
  | ServiceUnavailableException;
