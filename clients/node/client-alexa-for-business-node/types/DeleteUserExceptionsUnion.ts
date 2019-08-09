import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteUserExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
