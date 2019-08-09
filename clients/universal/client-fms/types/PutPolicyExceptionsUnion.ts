import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidTypeException } from "./InvalidTypeException";
export type PutPolicyExceptionsUnion =
  | ResourceNotFoundException
  | InvalidOperationException
  | InvalidInputException
  | LimitExceededException
  | InternalErrorException
  | InvalidTypeException;
