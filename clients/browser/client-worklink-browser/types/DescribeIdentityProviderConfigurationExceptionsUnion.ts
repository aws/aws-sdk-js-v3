import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DescribeIdentityProviderConfigurationExceptionsUnion =
  | UnauthorizedException
  | InternalServerErrorException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException;
