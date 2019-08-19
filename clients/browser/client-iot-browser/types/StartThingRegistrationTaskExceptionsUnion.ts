import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type StartThingRegistrationTaskExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | InternalFailureException;
