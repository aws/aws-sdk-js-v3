import { InvalidExpressionException } from "./InvalidExpressionException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type SelectResourceConfigExceptionsUnion =
  | InvalidExpressionException
  | InvalidLimitException
  | InvalidNextTokenException;
