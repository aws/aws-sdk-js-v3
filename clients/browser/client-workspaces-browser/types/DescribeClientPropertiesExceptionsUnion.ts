import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
export type DescribeClientPropertiesExceptionsUnion =
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | AccessDeniedException;
