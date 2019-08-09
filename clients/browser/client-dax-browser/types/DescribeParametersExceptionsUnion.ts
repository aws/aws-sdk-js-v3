import { ParameterGroupNotFoundFault } from "./ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeParametersExceptionsUnion =
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
