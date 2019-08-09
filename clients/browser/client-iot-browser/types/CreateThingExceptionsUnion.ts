import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateThingExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException;
