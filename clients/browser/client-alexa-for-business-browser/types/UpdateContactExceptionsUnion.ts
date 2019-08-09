import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UpdateContactExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
