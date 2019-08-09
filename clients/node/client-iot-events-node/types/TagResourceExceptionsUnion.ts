import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
export type TagResourceExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ResourceInUseException
  | ThrottlingException
  | LimitExceededException
  | InternalFailureException;
