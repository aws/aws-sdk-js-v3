import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteIntegrationResponseExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
