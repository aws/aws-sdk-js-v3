import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteDedicatedIpPoolExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException
  | ConcurrentModificationException;
