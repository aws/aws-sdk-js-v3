import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteRoomExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
