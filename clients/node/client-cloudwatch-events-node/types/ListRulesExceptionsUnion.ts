import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListRulesExceptionsUnion =
  | InternalException
  | ResourceNotFoundException;
