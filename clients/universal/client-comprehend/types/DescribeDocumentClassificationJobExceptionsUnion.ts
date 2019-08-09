import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type DescribeDocumentClassificationJobExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | JobNotFoundException
  | InternalServerException;
