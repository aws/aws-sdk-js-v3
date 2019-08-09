import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateDedicatedIpPoolExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException
  | TooManyRequestsException
  | BadRequestException
  | ConcurrentModificationException;
