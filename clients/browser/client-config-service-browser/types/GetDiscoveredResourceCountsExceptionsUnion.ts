import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type GetDiscoveredResourceCountsExceptionsUnion =
  | ValidationException
  | InvalidLimitException
  | InvalidNextTokenException;
