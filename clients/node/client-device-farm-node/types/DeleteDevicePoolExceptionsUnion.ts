import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
export type DeleteDevicePoolExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | LimitExceededException
  | ServiceAccountException;
