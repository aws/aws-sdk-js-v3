import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentDeploymentException } from "./ConcurrentDeploymentException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
export type SyncDeploymentJobExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException
  | LimitExceededException
  | ConcurrentDeploymentException
  | IdempotentParameterMismatchException;
