import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type RegisterVolumeExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
