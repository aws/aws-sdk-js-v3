import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
export type GenerateClientCertificateExceptionsUnion =
  | UnauthorizedException
  | TooManyRequestsException
  | LimitExceededException;
