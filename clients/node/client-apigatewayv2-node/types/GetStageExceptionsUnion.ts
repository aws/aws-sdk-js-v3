import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetStageExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
