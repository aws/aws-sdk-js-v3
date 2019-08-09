import { MalformedQueryException } from "./MalformedQueryException";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type StartQueryExceptionsUnion =
  | MalformedQueryException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException;
