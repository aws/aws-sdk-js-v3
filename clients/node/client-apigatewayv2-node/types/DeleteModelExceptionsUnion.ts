import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteModelExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
