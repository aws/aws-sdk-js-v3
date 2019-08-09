import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type UpdateJobPriorityExceptionsUnion =
  | BadRequestException
  | TooManyRequestsException
  | NotFoundException
  | InternalServiceException;
