import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type CreateKeysAndCertificateExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
