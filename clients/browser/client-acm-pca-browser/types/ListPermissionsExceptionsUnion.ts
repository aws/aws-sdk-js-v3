import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidStateException } from "./InvalidStateException";
import { RequestFailedException } from "./RequestFailedException";
export type ListPermissionsExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidNextTokenException
  | InvalidStateException
  | RequestFailedException;
