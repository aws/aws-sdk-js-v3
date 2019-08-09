import { BaseException } from "./BaseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
export type UpgradeElasticsearchDomainExceptionsUnion =
  | BaseException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException
  | DisabledOperationException
  | ValidationException
  | InternalException;
