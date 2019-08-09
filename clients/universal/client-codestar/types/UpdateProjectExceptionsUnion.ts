import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
export type UpdateProjectExceptionsUnion =
  | ProjectNotFoundException
  | ValidationException;
