import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type DescribeDefaultAuthorizerExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
