import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetModelTemplateExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
