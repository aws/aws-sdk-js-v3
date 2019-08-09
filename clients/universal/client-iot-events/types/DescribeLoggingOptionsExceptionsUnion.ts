import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type DescribeLoggingOptionsExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | UnsupportedOperationException;
