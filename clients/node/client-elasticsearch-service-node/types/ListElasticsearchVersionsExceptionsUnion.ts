import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
export type ListElasticsearchVersionsExceptionsUnion =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException;
