import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UpdateVolumeExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
