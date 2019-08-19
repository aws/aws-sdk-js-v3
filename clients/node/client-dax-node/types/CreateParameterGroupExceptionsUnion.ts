import { ParameterGroupQuotaExceededFault } from "./ParameterGroupQuotaExceededFault";
import { ParameterGroupAlreadyExistsFault } from "./ParameterGroupAlreadyExistsFault";
import { InvalidParameterGroupStateFault } from "./InvalidParameterGroupStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateParameterGroupExceptionsUnion =
  | ParameterGroupQuotaExceededFault
  | ParameterGroupAlreadyExistsFault
  | InvalidParameterGroupStateFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
