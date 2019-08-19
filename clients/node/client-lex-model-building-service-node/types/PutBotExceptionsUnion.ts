import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
export type PutBotExceptionsUnion =
  | ConflictException
  | LimitExceededException
  | InternalFailureException
  | BadRequestException
  | PreconditionFailedException;
