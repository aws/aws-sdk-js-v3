import { AlreadyExistsException } from "./AlreadyExistsException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
export type PutDeliverabilityDashboardOptionExceptionsUnion =
  | AlreadyExistsException
  | NotFoundException
  | TooManyRequestsException
  | LimitExceededException
  | BadRequestException;
