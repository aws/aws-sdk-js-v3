import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
export type GetSlotTypesExceptionsUnion =
  | NotFoundException
  | LimitExceededException
  | InternalFailureException
  | BadRequestException;
