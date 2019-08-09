import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteTranscriptionJobExceptionsUnion =
  | LimitExceededException
  | BadRequestException
  | InternalFailureException;
