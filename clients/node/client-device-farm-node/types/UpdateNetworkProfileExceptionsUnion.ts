import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
export type UpdateNetworkProfileExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | LimitExceededException
  | ServiceAccountException;
