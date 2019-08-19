import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidTagException } from "./InvalidTagException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type TagResourceExceptionsUnion =
  | LimitExceededException
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidTagException
  | InternalServiceErrorException
  | ThrottlingException;
