import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
export type CreateBotVersionExceptionsUnion =
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | InternalFailureException
  | BadRequestException
  | PreconditionFailedException;
