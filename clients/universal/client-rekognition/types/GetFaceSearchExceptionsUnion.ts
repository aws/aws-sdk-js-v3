import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
export type GetFaceSearchExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | InvalidPaginationTokenException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException;
