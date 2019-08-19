import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type DescribeSecurityProfileExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalFailureException;
