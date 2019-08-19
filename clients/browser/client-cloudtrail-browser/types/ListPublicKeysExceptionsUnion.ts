import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidTokenException } from "./InvalidTokenException";
export type ListPublicKeysExceptionsUnion =
  | InvalidTimeRangeException
  | UnsupportedOperationException
  | OperationNotPermittedException
  | InvalidTokenException;
