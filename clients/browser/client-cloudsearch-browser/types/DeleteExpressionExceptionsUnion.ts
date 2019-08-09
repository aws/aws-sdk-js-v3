import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteExpressionExceptionsUnion =
  | BaseException
  | InternalException
  | InvalidTypeException
  | ResourceNotFoundException;
