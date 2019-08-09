import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateDocumentationPartExceptionsUnion =
  | BadRequestException
  | ConflictException
  | UnauthorizedException
  | NotFoundException
  | LimitExceededException
  | TooManyRequestsException;
