import { InvalidLookupAttributesException } from "./InvalidLookupAttributesException";
import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { InvalidMaxResultsException } from "./InvalidMaxResultsException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type LookupEventsExceptionsUnion =
  | InvalidLookupAttributesException
  | InvalidTimeRangeException
  | InvalidMaxResultsException
  | InvalidNextTokenException;
