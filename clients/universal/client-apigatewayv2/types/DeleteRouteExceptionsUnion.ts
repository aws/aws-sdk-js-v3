import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteRouteExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
