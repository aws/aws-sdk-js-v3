import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ImportDocumentationPartsExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | BadRequestException
  | LimitExceededException
  | TooManyRequestsException;
