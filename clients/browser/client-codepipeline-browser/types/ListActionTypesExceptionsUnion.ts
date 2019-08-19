import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListActionTypesExceptionsUnion =
  | ValidationException
  | InvalidNextTokenException;
