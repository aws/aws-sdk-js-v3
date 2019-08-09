import { LexiconNotFoundException } from "./LexiconNotFoundException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteLexiconExceptionsUnion =
  | LexiconNotFoundException
  | ServiceFailureException;
