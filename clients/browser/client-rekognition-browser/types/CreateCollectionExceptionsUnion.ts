import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
export type CreateCollectionExceptionsUnion =
  | InvalidParameterException
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | ProvisionedThroughputExceededException
  | ResourceAlreadyExistsException;
