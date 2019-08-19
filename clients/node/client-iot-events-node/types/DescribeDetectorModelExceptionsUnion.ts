import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DescribeDetectorModelExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalFailureException
  | ServiceUnavailableException;
