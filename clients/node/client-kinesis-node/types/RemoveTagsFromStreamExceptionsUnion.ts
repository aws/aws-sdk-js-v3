import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
export type RemoveTagsFromStreamExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | LimitExceededException;
