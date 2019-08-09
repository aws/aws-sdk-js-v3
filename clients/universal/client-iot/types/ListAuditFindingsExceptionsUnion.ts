import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type ListAuditFindingsExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException;
