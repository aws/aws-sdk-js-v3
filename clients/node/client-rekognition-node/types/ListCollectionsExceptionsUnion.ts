import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListCollectionsExceptionsUnion =
  | InvalidParameterException
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | ProvisionedThroughputExceededException
  | InvalidPaginationTokenException
  | ResourceNotFoundException;
