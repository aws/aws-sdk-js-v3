import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteRegistrationCodeExceptionsUnion =
  | ThrottlingException
  | ResourceNotFoundException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
