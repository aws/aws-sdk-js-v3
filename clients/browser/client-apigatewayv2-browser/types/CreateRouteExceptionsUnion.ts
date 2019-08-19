import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
export type CreateRouteExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException
  | ConflictException;
