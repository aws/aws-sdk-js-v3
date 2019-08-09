import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
export type RejectSkillExceptionsUnion =
  | ConcurrentModificationException
  | NotFoundException;
