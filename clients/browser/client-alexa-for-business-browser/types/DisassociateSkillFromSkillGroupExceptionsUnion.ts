import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
export type DisassociateSkillFromSkillGroupExceptionsUnion =
  | ConcurrentModificationException
  | NotFoundException;
