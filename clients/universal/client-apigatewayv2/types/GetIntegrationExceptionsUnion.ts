import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetIntegrationExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
