import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
export type DeleteBotChannelAssociationExceptionsUnion =
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | InternalFailureException
  | BadRequestException;
