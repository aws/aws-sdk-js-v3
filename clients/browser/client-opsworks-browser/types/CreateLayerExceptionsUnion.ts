import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateLayerExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
