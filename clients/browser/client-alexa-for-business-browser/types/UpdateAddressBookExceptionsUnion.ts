import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UpdateAddressBookExceptionsUnion =
  | NotFoundException
  | NameInUseException
  | ConcurrentModificationException;
