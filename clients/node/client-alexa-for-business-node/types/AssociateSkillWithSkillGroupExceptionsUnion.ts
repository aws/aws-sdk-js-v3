import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { SkillNotLinkedException } from "./SkillNotLinkedException";
export type AssociateSkillWithSkillGroupExceptionsUnion =
  | ConcurrentModificationException
  | NotFoundException
  | SkillNotLinkedException;
