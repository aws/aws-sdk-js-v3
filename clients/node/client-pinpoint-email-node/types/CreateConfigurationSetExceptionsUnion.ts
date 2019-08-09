import { AlreadyExistsException } from "./AlreadyExistsException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateConfigurationSetExceptionsUnion =
  | AlreadyExistsException
  | NotFoundException
  | TooManyRequestsException
  | LimitExceededException
  | BadRequestException
  | ConcurrentModificationException;
