import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DefineSuggesterExceptionsUnion =
  | BaseException
  | InternalException
  | LimitExceededException
  | InvalidTypeException
  | ResourceNotFoundException;
