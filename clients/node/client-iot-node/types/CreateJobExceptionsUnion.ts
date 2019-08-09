import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateJobExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | LimitExceededException
  | ThrottlingException
  | ServiceUnavailableException;
