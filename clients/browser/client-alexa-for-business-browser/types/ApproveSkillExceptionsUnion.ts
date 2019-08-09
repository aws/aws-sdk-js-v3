import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type ApproveSkillExceptionsUnion =
  | LimitExceededException
  | NotFoundException
  | ConcurrentModificationException;
