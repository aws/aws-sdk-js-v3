import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteContactExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
