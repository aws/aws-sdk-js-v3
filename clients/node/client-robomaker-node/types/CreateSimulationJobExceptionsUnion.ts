import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateSimulationJobExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException
  | LimitExceededException
  | IdempotentParameterMismatchException
  | ServiceUnavailableException;
