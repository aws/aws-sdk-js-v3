import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UnassignVolumeExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
