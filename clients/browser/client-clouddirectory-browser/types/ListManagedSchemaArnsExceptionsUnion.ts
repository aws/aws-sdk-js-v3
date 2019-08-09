import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { ValidationException } from "./ValidationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListManagedSchemaArnsExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | ValidationException
  | AccessDeniedException
  | ResourceNotFoundException
  | InvalidNextTokenException;
