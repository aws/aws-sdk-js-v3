import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type UpdateResolverRuleExceptionsUnion =
  | InvalidRequestException
  | InvalidParameterException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | LimitExceededException
  | InternalServiceErrorException
  | ThrottlingException;
