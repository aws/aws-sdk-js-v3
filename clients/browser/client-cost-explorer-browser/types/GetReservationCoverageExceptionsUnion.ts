import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type GetReservationCoverageExceptionsUnion =
  | LimitExceededException
  | DataUnavailableException
  | InvalidNextTokenException;
