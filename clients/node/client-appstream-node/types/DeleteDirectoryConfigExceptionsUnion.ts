import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteDirectoryConfigExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException;
