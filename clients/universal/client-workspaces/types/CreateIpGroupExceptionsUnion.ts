import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceCreationFailedException } from "./ResourceCreationFailedException";
import { AccessDeniedException } from "./AccessDeniedException";
export type CreateIpGroupExceptionsUnion =
  | InvalidParameterValuesException
  | ResourceLimitExceededException
  | ResourceAlreadyExistsException
  | ResourceCreationFailedException
  | AccessDeniedException;
