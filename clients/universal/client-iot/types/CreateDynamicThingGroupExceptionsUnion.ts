import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidQueryException } from "./InvalidQueryException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateDynamicThingGroupExceptionsUnion =
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalFailureException
  | InvalidQueryException
  | LimitExceededException;
