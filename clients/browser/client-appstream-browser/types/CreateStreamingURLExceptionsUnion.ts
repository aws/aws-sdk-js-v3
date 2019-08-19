import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateStreamingURLExceptionsUnion =
  | ResourceNotFoundException
  | ResourceNotAvailableException
  | OperationNotPermittedException
  | InvalidParameterCombinationException;
