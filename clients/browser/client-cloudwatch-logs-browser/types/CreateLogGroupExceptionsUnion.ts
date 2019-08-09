import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateLogGroupExceptionsUnion =
  | InvalidParameterException
  | ResourceAlreadyExistsException
  | LimitExceededException
  | OperationAbortedException
  | ServiceUnavailableException;
