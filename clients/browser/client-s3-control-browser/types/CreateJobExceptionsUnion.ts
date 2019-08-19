import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { IdempotencyException } from "./IdempotencyException";
import { InternalServiceException } from "./InternalServiceException";
export type CreateJobExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException
  | IdempotencyException
  | InternalServiceException;
