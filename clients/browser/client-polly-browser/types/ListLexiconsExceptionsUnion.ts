import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListLexiconsExceptionsUnion =
  | InvalidNextTokenException
  | ServiceFailureException;
