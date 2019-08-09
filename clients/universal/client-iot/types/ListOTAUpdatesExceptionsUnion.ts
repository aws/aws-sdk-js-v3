import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListOTAUpdatesExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | InternalFailureException
  | ServiceUnavailableException;
