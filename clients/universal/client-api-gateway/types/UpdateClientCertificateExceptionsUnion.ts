import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
export type UpdateClientCertificateExceptionsUnion =
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException;
