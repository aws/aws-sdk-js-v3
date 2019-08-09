import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteDomainNameExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
