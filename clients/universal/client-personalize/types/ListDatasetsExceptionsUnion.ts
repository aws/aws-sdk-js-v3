import { InvalidInputException } from "./InvalidInputException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListDatasetsExceptionsUnion =
  | InvalidInputException
  | InvalidNextTokenException;
