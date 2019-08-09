import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
export type DescribeBundleExceptionsUnion =
  | InternalFailureException
  | ServiceUnavailableException
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException;
