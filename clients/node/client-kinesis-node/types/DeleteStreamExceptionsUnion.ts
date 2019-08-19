import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteStreamExceptionsUnion =
  | ResourceNotFoundException
  | LimitExceededException
  | ResourceInUseException;
