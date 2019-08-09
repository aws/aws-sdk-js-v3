import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
import { UnresolvableUsageUnitException } from "./UnresolvableUsageUnitException";
export type GetUsageForecastExceptionsUnion =
  | LimitExceededException
  | DataUnavailableException
  | UnresolvableUsageUnitException;
