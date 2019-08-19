import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
export type ListDevicePoolsExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | LimitExceededException
  | ServiceAccountException;
