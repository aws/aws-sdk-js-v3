import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListWebsiteCertificateAuthoritiesExceptionsUnion =
  | UnauthorizedException
  | InternalServerErrorException
  | InvalidRequestException
  | TooManyRequestsException;
