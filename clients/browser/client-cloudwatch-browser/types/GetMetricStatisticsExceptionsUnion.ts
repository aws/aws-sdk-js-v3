import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InternalServiceFault } from "./InternalServiceFault";
export type GetMetricStatisticsExceptionsUnion =
  | InvalidParameterValueException
  | MissingRequiredParameterException
  | InvalidParameterCombinationException
  | InternalServiceFault;
