import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type CreateResolverRuleExceptionsUnion =
  | InvalidParameterException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ResourceExistsException
  | ResourceUnavailableException
  | InternalServiceErrorException
  | ThrottlingException;
