import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type AssignVolumeExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
