import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateSkillGroupExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException
  | ConcurrentModificationException;
