import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type BuildSuggestersExceptionsUnion =
  | BaseException
  | InternalException
  | ResourceNotFoundException;
