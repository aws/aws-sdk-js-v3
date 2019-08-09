import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { RequestFailedException } from "./RequestFailedException";
export type DeletePermissionExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidStateException
  | RequestFailedException;
