import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UpdateRecoveryPointLifecycleExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterValueException
  | MissingParameterValueException
  | ServiceUnavailableException;
