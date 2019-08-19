import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type GetSchemaCreationStatusExceptionsUnion =
  | BadRequestException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException;
