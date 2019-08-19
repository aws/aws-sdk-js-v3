import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteAddressBookExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException;
