import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidArnException } from "./InvalidArnException";
export type ListTagsForResourceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | InvalidNextTokenException
  | InvalidArnException;
