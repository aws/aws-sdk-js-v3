import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
export type ListStreamProcessorsExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | InvalidParameterException
  | InvalidPaginationTokenException
  | ProvisionedThroughputExceededException;
