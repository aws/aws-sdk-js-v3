import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { LimitExceededException } from "./LimitExceededException";
export type UpdateImagePermissionsExceptionsUnion =
  | ResourceNotFoundException
  | ResourceNotAvailableException
  | LimitExceededException;
