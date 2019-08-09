import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceFault } from "./InternalServiceFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
export type DeleteAnomalyDetectorExceptionsUnion =
  | ResourceNotFoundException
  | InternalServiceFault
  | InvalidParameterValueException
  | MissingRequiredParameterException;
