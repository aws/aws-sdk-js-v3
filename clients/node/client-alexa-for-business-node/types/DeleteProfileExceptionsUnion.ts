import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteProfileExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
