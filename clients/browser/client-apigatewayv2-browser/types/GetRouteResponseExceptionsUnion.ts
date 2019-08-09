import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetRouteResponseExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
