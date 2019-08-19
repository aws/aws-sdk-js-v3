import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type AssociateWebsiteCertificateAuthorityExceptionsUnion =
  | UnauthorizedException
  | InternalServerErrorException
  | InvalidRequestException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | TooManyRequestsException;
