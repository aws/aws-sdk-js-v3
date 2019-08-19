import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateCompanyNetworkConfigurationExceptionsUnion =
  | UnauthorizedException
  | InternalServerErrorException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException;
