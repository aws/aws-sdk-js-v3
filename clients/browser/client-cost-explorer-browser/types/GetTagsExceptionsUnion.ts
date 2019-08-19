import { LimitExceededException } from "./LimitExceededException";
import { BillExpirationException } from "./BillExpirationException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { RequestChangedException } from "./RequestChangedException";
export type GetTagsExceptionsUnion =
  | LimitExceededException
  | BillExpirationException
  | DataUnavailableException
  | InvalidNextTokenException
  | RequestChangedException;
