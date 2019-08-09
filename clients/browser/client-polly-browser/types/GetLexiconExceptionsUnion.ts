import { LexiconNotFoundException } from "./LexiconNotFoundException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetLexiconExceptionsUnion =
  | LexiconNotFoundException
  | ServiceFailureException;
