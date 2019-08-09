import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
export type StartOnDemandAuditTaskExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | LimitExceededException;
