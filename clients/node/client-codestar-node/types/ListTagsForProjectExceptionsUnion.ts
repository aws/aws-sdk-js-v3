import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListTagsForProjectExceptionsUnion =
  | ProjectNotFoundException
  | ValidationException
  | InvalidNextTokenException;
