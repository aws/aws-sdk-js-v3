import { ResourceInUseException } from "./ResourceInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
export type DeleteNetworkProfileExceptionsUnion =
  | ResourceInUseException
  | ConcurrentModificationException
  | NotFoundException;
