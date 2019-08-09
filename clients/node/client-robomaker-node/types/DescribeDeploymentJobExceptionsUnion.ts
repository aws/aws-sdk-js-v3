import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
export type DescribeDeploymentJobExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException;
