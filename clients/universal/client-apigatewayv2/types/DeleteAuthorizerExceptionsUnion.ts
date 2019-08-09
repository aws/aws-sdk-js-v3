import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteAuthorizerExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
