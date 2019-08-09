import { LimitExceededException } from "./LimitExceededException";
import { BillExpirationException } from "./BillExpirationException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { RequestChangedException } from "./RequestChangedException";
export type GetDimensionValuesExceptionsUnion =
  | LimitExceededException
  | BillExpirationException
  | DataUnavailableException
  | InvalidNextTokenException
  | RequestChangedException;
