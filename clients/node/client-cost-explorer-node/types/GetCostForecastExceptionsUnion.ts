import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
export type GetCostForecastExceptionsUnion =
  | LimitExceededException
  | DataUnavailableException;
