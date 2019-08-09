import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type PutDedicatedIpWarmupAttributesExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException;
