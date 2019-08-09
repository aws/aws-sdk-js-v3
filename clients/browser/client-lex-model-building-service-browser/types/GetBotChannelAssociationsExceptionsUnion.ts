import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
export type GetBotChannelAssociationsExceptionsUnion =
  | LimitExceededException
  | InternalFailureException
  | BadRequestException;
