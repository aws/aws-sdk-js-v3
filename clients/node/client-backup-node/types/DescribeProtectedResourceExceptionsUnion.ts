import { MissingParameterValueException } from "./MissingParameterValueException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeProtectedResourceExceptionsUnion =
  | MissingParameterValueException
  | InvalidParameterValueException
  | ServiceUnavailableException
  | ResourceNotFoundException;
