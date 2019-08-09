import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ValidationException } from "./ValidationException";
export type ListProjectsExceptionsUnion =
  | InvalidNextTokenException
  | ValidationException;
