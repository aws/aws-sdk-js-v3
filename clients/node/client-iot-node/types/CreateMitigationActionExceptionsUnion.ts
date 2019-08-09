import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type CreateMitigationActionExceptionsUnion =
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | LimitExceededException
  | ThrottlingException
  | InternalFailureException;
