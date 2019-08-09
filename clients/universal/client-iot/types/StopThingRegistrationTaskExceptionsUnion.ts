import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type StopThingRegistrationTaskExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | InternalFailureException
  | ResourceNotFoundException;
