import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type ListEmailIdentitiesExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException;
