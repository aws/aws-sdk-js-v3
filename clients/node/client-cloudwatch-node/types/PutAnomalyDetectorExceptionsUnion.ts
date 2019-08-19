import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceFault } from "./InternalServiceFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
export type PutAnomalyDetectorExceptionsUnion =
  | LimitExceededException
  | InternalServiceFault
  | InvalidParameterValueException
  | MissingRequiredParameterException;
