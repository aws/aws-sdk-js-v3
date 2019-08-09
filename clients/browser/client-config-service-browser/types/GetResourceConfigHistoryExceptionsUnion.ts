import { ValidationException } from "./ValidationException";
import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { ResourceNotDiscoveredException } from "./ResourceNotDiscoveredException";
export type GetResourceConfigHistoryExceptionsUnion =
  | ValidationException
  | InvalidTimeRangeException
  | InvalidLimitException
  | InvalidNextTokenException
  | NoAvailableConfigurationRecorderException
  | ResourceNotDiscoveredException;
