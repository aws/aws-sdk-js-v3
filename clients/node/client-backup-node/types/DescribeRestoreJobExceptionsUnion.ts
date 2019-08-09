import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DependencyFailureException } from "./DependencyFailureException";
export type DescribeRestoreJobExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterValueException
  | MissingParameterValueException
  | ServiceUnavailableException
  | DependencyFailureException;
