import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { JobStatusException } from "./JobStatusException";
import { InternalServiceException } from "./InternalServiceException";
export type UpdateJobStatusExceptionsUnion =
  | BadRequestException
  | TooManyRequestsException
  | NotFoundException
  | JobStatusException
  | InternalServiceException;
