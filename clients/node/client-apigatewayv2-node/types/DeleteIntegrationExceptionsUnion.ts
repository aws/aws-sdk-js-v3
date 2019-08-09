import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteIntegrationExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
