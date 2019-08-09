import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListTagsForResourceExceptionsUnion =
  | ResourceNotFoundException
  | ValidationException
  | InvalidLimitException
  | InvalidNextTokenException;
