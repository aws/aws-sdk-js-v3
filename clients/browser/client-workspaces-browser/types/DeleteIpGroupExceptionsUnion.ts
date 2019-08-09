import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAssociatedException } from "./ResourceAssociatedException";
import { AccessDeniedException } from "./AccessDeniedException";
export type DeleteIpGroupExceptionsUnion =
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | ResourceAssociatedException
  | AccessDeniedException;
