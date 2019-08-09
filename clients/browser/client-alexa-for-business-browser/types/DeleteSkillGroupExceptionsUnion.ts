import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteSkillGroupExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
