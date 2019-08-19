import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
export type DescribeFleetExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException;
