import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteServiceActionExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException;
