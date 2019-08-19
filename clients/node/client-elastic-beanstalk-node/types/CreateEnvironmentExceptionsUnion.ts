import { TooManyEnvironmentsException } from "./TooManyEnvironmentsException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
export type CreateEnvironmentExceptionsUnion =
  | TooManyEnvironmentsException
  | InsufficientPrivilegesException;
