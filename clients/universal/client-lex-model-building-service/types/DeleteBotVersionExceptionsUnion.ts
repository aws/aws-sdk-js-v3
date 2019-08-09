import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteBotVersionExceptionsUnion =
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | InternalFailureException
  | BadRequestException
  | ResourceInUseException;
