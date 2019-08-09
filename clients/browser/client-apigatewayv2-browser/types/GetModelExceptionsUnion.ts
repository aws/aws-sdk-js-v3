import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetModelExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
