import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
export type UpdateDeploymentExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException
  | ConflictException;
