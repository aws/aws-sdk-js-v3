import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteRouteResponseExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
