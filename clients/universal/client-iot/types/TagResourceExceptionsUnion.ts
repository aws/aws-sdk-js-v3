import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
export type TagResourceExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ResourceNotFoundException
  | ThrottlingException
  | LimitExceededException;
