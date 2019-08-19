import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
export type DeleteClientCertificateExceptionsUnion =
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException;
