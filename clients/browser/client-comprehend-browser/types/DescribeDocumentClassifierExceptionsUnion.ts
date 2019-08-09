import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type DescribeDocumentClassifierExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | ResourceNotFoundException
  | InternalServerException;
