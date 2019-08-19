import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteCollectionExceptionsUnion =
  | InvalidParameterException
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException;
