import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
export type DeleteDocumentationPartExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | ConflictException
  | BadRequestException;
