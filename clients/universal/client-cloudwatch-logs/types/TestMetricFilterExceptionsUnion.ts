import { InvalidParameterException } from "./InvalidParameterException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type TestMetricFilterExceptionsUnion =
  | InvalidParameterException
  | ServiceUnavailableException;
