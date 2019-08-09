import { InvalidRequestException } from "./InvalidRequestException";
import { TaskAlreadyExistsException } from "./TaskAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type StartAuditMitigationActionsTaskExceptionsUnion =
  | InvalidRequestException
  | TaskAlreadyExistsException
  | LimitExceededException
  | ThrottlingException
  | InternalFailureException;
