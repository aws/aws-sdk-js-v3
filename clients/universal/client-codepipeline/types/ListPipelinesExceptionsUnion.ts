import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListPipelinesExceptionsUnion =
  | ValidationException
  | InvalidNextTokenException;
