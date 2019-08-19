import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type ListThingRegistrationTaskReportsExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | InternalFailureException;
