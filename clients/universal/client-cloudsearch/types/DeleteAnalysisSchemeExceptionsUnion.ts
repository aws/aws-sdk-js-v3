import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteAnalysisSchemeExceptionsUnion =
  | BaseException
  | InternalException
  | InvalidTypeException
  | ResourceNotFoundException;
