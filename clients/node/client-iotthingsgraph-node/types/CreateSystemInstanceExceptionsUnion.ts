import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateSystemInstanceExceptionsUnion =
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | InternalFailureException
  | LimitExceededException;
