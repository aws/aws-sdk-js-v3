import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetIntegrationResponseExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
