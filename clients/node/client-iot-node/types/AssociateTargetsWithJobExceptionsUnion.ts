import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type AssociateTargetsWithJobExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | LimitExceededException
  | ThrottlingException
  | ServiceUnavailableException;
