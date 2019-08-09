import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
export type DescribeSimulationApplicationExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalServerException;
