import { BaseException } from "./BaseException";
import { DisabledOperationException } from "./DisabledOperationException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ValidationException } from "./ValidationException";
export type CreateElasticsearchDomainExceptionsUnion =
  | BaseException
  | DisabledOperationException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ValidationException;
