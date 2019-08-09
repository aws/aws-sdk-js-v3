import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
export type GetTranscriptionJobExceptionsUnion =
  | BadRequestException
  | LimitExceededException
  | InternalFailureException
  | NotFoundException;
