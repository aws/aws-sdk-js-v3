import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
export type ListApplicationsExceptionsUnion =
  | ValidationException
  | InternalServerException;
