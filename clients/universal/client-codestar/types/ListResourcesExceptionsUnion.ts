import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ValidationException } from "./ValidationException";
export type ListResourcesExceptionsUnion =
  | ProjectNotFoundException
  | InvalidNextTokenException
  | ValidationException;
