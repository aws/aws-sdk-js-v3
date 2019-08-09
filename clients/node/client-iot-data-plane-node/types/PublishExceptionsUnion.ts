import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
export type PublishExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | UnauthorizedException
  | MethodNotAllowedException;
