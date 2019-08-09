import { InvalidParameterGroupStateFault } from "./InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "./ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DeleteParameterGroupExceptionsUnion =
  | InvalidParameterGroupStateFault
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
