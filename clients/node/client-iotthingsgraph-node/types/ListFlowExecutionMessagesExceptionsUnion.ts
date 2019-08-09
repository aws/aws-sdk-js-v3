import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListFlowExecutionMessagesExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | ResourceNotFoundException;
