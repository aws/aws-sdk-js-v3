import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type DescribeJobExceptionsUnion =
  | BadRequestException
  | TooManyRequestsException
  | NotFoundException
  | InternalServiceException;
