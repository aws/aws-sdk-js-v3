import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
export type CreateSimulationApplicationExceptionsUnion =
  | InvalidParameterException
  | ResourceAlreadyExistsException
  | LimitExceededException
  | ThrottlingException
  | InternalServerException
  | IdempotentParameterMismatchException;
