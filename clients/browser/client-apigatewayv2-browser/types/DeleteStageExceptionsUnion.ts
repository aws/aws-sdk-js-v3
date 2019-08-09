import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteStageExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
