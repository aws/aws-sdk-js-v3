import { InvalidParameterException } from "./InvalidParameterException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
export type CreateRobotApplicationVersionExceptionsUnion =
  | InvalidParameterException
  | IdempotentParameterMismatchException
  | LimitExceededException
  | ThrottlingException
  | InternalServerException;
