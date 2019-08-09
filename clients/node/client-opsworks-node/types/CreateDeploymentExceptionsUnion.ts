import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateDeploymentExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
