import { TooManyEnvironmentsException } from "./TooManyEnvironmentsException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
export type ComposeEnvironmentsExceptionsUnion =
  | TooManyEnvironmentsException
  | InsufficientPrivilegesException;
