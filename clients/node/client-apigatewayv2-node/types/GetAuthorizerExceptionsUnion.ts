import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetAuthorizerExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
