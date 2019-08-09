import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetApiExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
