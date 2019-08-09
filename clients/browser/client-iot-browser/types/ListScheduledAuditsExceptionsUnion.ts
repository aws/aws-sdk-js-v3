import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type ListScheduledAuditsExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException;
