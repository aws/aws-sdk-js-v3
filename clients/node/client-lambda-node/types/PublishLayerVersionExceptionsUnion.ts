import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { CodeStorageExceededException } from "./CodeStorageExceededException";
export type PublishLayerVersionExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | TooManyRequestsException
  | InvalidParameterValueException
  | CodeStorageExceededException;
