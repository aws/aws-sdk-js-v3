import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateDomainMetadataExceptionsUnion =
  | UnauthorizedException
  | InternalServerErrorException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException;
