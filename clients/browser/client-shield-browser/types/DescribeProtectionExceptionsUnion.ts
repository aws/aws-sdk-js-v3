import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeProtectionExceptionsUnion =
  | InternalErrorException
  | InvalidParameterException
  | ResourceNotFoundException;
