import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetLogGroupFieldsExceptionsUnion =
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException;
