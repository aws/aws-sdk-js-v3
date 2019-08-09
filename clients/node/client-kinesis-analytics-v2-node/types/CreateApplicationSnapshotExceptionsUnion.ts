import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { InvalidRequestException } from "./InvalidRequestException";
export type CreateApplicationSnapshotExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | LimitExceededException
  | InvalidArgumentException
  | UnsupportedOperationException
  | InvalidRequestException;
