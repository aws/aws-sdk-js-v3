import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
export type DescribeTagsExceptionsUnion =
  | AuthorizationErrorException
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException;
