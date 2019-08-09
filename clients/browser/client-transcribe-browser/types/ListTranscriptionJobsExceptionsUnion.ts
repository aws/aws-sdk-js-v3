import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
export type ListTranscriptionJobsExceptionsUnion =
  | BadRequestException
  | LimitExceededException
  | InternalFailureException;
