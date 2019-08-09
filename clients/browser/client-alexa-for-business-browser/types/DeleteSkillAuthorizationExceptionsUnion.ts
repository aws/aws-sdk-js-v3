import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteSkillAuthorizationExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
