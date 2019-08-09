import { ResourceInUseException } from "./ResourceInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateUserExceptionsUnion =
  | ResourceInUseException
  | LimitExceededException
  | ConcurrentModificationException;
