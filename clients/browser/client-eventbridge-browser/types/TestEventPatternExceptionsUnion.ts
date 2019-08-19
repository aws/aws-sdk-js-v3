import { InvalidEventPatternException } from "./InvalidEventPatternException";
import { InternalException } from "./InternalException";
export type TestEventPatternExceptionsUnion =
  | InvalidEventPatternException
  | InternalException;
