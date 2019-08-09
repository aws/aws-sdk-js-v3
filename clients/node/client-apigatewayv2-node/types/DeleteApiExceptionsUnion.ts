import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteApiExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
