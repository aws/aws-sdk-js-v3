import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
export type DescribeScriptExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | InternalServiceException
  | NotFoundException;
