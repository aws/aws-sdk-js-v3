import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { IdempotencyException } from "./IdempotencyException";
import { ServiceAccountException } from "./ServiceAccountException";
export type ScheduleRunExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | LimitExceededException
  | IdempotencyException
  | ServiceAccountException;
