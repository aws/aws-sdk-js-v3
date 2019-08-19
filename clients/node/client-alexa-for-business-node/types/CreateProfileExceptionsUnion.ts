import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateProfileExceptionsUnion =
  | LimitExceededException
  | AlreadyExistsException
  | ConcurrentModificationException;
